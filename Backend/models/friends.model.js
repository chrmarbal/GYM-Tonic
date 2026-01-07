/* <=============================== DEPENDENCIAS ===============================> */
const dbConn = require("../utils/mssql.config")
const sql = require("mssql")

/* <=============================== CONSTRUCTOR ===============================> */
let friend = function(friend){
    this.friend_id = friend.friend_id // AUTO INCREMENTAL
    this.friend_userid1 = friend.friend_userid1
    this.friend_userid2 = friend.friend_userid2
}

/* <=============================== FIND ALL ===============================> */
friend.findAll = async (result) => {
    try {
        const pool = await sql.connect(dbConn)
        const response = await pool.request().query("SELECT * FROM Friends")
        result(null, response.recordset)
        sql.close()
    } catch (err) {
        result(err, null)
    }
}

/* <=============================== FIND BY ID ===============================> */
friend.findById = async function (id, result) {
    try {
        const pool = await sql.connect(dbConn)
        const response = await pool.request()
            .input("id", sql.Int, id)
            .query("SELECT * FROM Friends WHERE friend_id = @id")

        if (response.recordset.length > 0) {
            result(null, response.recordset[0])
        } else {
            result({ err: "No hay datos" }, null)
        }

        sql.close()
    } catch (err) {
        result(err, null)
        sql.close()
    }
}

/* <=============================== CREATE ===============================> */
friend.create = async (newFriend, result) => {
    try {
        const pool = await sql.connect(dbConn)

        const request = pool.request()
        request.input("id", sql.Int, id)
        request.input("userId1", sql.VarChar, newFriend.friend_userid1)
        request.input("userId2", sql.VarChar, newFriend.friend_userid2)

        const sqlQuery = `
            INSERT INTO Friends (
                friend_userid1, friend_userid2
            )
            VALUES (
                @userId1, @userId2
            )
        `
    } catch (err) {
        result(err, null)
        sql.close()
    }
}

/* <=============================== DELETE ===============================> */
exercise.delete = async function (id, result) {
    try {
        const pool = await sql.connect(dbConn)
        const response = await pool.request()
            .input("id", sql.Int, id)
            .query("DELETE FROM Friends WHERE friend_id = @id")

        result(null, response)
        sql.close()
    } catch (err) {
        result(err, null)
        sql.close()
    }
}

/* <======- EXPORTAMOS EL MODELO -======> */
module.exports = friend