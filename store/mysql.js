const mysql = require('mysql');
const config = require('../config');

const dbConf = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};

let connection;

function handleCon() {
    connection = mysql.createConnection(dbConf);
    connection.connect((err) => {
        if (err) {
            console.error('[db error]', err);
            setTimeout(handleCon, 2000);
        } else {
            console.log('DB Connected!')
        }
    });

    connection.on('error', err => {
        console.error('[db error]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleCon();
        } else {
            throw err;
        }
    })
}
handleCon();

function list(table) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    })
}

function get(table, id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE id=${id}`, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    })
}

function insert(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function update(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE ${table} SET ? WHERE id=?`, [data, data.id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

async function upsert(table, data, isNew) {
    if (data && data.id && isNew === 1) {
        return update(table, data);
    } else {
        return insert(table, data);
    }
}

function query(table, query) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE ?`, query, (err, res) => {
            if (err) return reject(err);
            result = JSON.stringify(res[0]);
            result = JSON.parse(result)
            resolve(result || null);
        })
    })
}




module.exports = {
    list,
    get,
    upsert,
    update,
    query,
}

//conect