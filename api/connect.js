import mysql from "mysql"


//adjust to your local machine
export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"social"
})