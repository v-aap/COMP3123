const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const user = require('./user.json');


/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
  res.json(user);
});


/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/

app.use(bodyParser.json());

router.post('/login', (req,res) => {
  const { username, password } = req.body; 

  //- If username and  passsword is valid then send resonse as below 
  if(username === user.username && password === user.password){
    res.json({
      status: true,
      message: "User Is valid"
  });
}

//- If username is invalid then send response as below 
  if (username !== user.username) {
    return res.json({
      status: false,
      message: "User Name is invalid"
    });
  }

  // - If passsword is invalid then send response as below 
  if (password !== user.password) {
    return res.json({
      status: false,
      message: "Password is invalid"
    });
  }
 
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req, res) => {
  const { username } = req.query; 

  if (!username) {
    return res.send('<b>Username is required for logout.</b>'); 
  }

  res.send(`<b>${username} successfully logged out.</b>`);
});


/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err,req,res,next) => {
  const errorObj = {
        status: 500,
        message: 'Something broke!',
        err: err.message
    }
    res.status(500).send(errorObj);
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));