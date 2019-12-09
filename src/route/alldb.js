const Pool = require('pg').Pool
const pool = new Pool({
    host: 'hungphat_nodejs_start_postgres',
    user: 'postgres',
    password: '',
    database: 'postgres',
    port: 5432,
})
const getUsers = (request, response) => {
    pool.query('SELECT * FROM customer', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM customer WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {  //TODO: em ko post dc anh giup em a
    const { name, dob } = request.body

    pool.query('INSERT INTO customer (name, dob) VALUES ($1, $2)', [name, dob], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, dob } = request.body

    pool.query(
        'UPDATE customer SET name = $1, dob = $2 WHERE id = $3',
        [name, dob, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User update with ID: ${id}`)
        }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM customer WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Customer deleted with ID: ${id}`)
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}