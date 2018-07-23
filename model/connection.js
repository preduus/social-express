var bcrypt      = require('bcrypt');
var sqlite3     = require('sqlite3').verbose();
var defaultMode = sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE;
let db          = new sqlite3.Database("./model/database/database", defaultMode);
// RUN MIGRATIONS
const migrations = require('./migrations/create_tables.js');
migrations.RUN_MIGRATE(db);


module.exports.GET_USERS = function(callback){
    db.serialize(() => {
        db.all(`SELECT * FROM users`, [], (err, rows) => {
            if (err) {
                console.error(err.message);
            }
            callback(rows);
        });
    });
}

module.exports.CREATE_USERS = function(data, callback){
    db.get(`SELECT * FROM users WHERE email <> ? AND username <> ?`, [data[2], data[1]], (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        if(row._id > 0){
            db.run(`INSERT INTO users(fullname, username, email, password, picture) VALUES(?, ?, ?, ?, ?)`, data, function (err) {
                if (err) {
                    return console.error(err.message);
                }
                callback(true);
            });
        }else{
            callback(false);
        }
    });
}

module.exports.LOGIN = function(data, callback){
    db.get(`SELECT * FROM users WHERE email = ? OR username = ?`, [data[0], data[0]], (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        if (row._id > 0 && bcrypt.compareSync(data[1], row.password)){
            callback(row);
        }else{
            callback(false);
        }
    });
}