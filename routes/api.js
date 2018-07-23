var express      = require('express');
var router       = express.Router();

const SQL = require('../model/connection.js');

var bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET social listing. */
router.get('/', function (req, res, next) {
    res.send('Welcome to Social API');
});

router.get('/users', function (req, res, next) {
    SQL.GET_USERS(function(data){
        res.send(JSON.stringify(data));
    })
});

router.post('/users/create', function (req, res, next) {
    var UserData = [req.body.fullname, req.body.username, req.body.email, bcrypt.hashSync(req.body.password, saltRounds), req.body.picture];
    SQL.CREATE_USERS(UserData, function(response){
        if(!response){
            res.status(409).json({'message': 'User already exists'});
        }else{
            res.status(200).json({'message': 'Successfully created!'});
        }
    })
});


router.post('/users/login', function (req, res, next) {
    var UserData = [req.body.usermail, req.body.password];
    SQL.LOGIN(UserData, function (response) {
        if (!response) {
            res.status(404).json({ 'message': 'User dont exist'});
        } else {
            res.status(200).json(response);
        }
    })
});

module.exports = router;