import mysql from "promise-mysql";
import config  from "./Constants";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.username,
    password: config.password,
    ssl: {
        rejectUnauthorized: false
    }
});

const getConnection = () =>{
    return connection
};

module.exports = {
    getConnection
}