
const env = require('dotenv').config({ debug: process.env.DEBUG });
const express = require('express');
const helmet = require('helmet');
const database = require('./class/database');

//const dbConnect = require('./config/init');
//const users = require('./routes/users');
//const cors = require('./middleware/cors');

const auth = require('./routes/authentication');
const user = require('./routes/user');

const cors = require('cors')
 
var app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

//app.use('./middleware/cors', cors);
app.use('/api/auth', auth);
app.use('/api/user', user);



// app.use(function(req, res, next) {
//     res.setTimeout(200);
//     next();
//      res.status(404).json({
//             success: false,
//             status: 404,
//             message: 'test'
//         });

//  });


app.get('/api/home', (req, res) => {
     res.status(404).json({
            success: false,
            status: 404,
            message: 'test'
        });
})


process.on('uncaughtException', function(err) {
    console.log(err);
});

const port = process.env.PORT || 4000;
app.listen(port);
console.log(`server on port ${port}`);


if (process.env.ERROR) {
    console.log(process.env.ERROR);
  }
  
