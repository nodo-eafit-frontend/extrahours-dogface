const {Pool} = require('pg')

const pool =new Pool({
    user:'postgres',
    password:'suaza',
    host:'localhost',
    port:5432,
    database:'bd_horas_extras'
})

module.exports = pool;