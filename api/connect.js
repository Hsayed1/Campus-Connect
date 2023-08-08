import mysql from "mysql"


//adjust to your local machine
export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Hamed123",
    database:"social"
})