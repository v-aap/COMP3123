var http = require("http");
//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise
var employee = require('./Employee.js');

//Define Server Port
const port = process.env.PORT || 3000

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>Welcome to Lab Exercise 03</h1>');
            res.end();
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>Employee Details</h1>');
            res.write(JSON.stringify(employee));
            res.end();
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const employeeNames = employee.employees.map(e => `${e.firstName} ${e.lastName}`).sort();

            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write('<h1>Employee Names </h1>')
            res.write(JSON.stringify(employeeNames))
            res.end();
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            const totalSalary = employee.employees.reduce((sum, e) => sum + e.Salary, 0);

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(JSON.stringify({ "total_salary": totalSalary }));
            res.end();
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})