const CREATE_USERS_TABLE = "CREATE TABLE IF NOT EXISTS users ("
    + "_id integer primary key autoincrement,"
    + "fullname varchar(40),"
    + "username varchar(20) NOT NULL,"
    + "email varchar(50) NOT NULL,"
    + "password varchar(255) NOT NULL,"
    + "picture varchar(255) ); ";

const CREATE_POSTS_TABLE = "CREATE TABLE IF NOT EXISTS posts ("
    + "_id integer primary key autoincrement,"
    + "text TEXT,"
    + "images TEXT,"
    + "created DATETIME,"
    + "user_id INTEGER UNSIGNED,"
    + "CONSTRAINT fk_uid FOREIGN KEY(user_id) REFERENCES users(_id) ON DELETE CASCADE ); ";

module.exports.RUN_MIGRATE = function (db) {
    db.run(CREATE_USERS_TABLE);
    db.run(CREATE_POSTS_TABLE);
};