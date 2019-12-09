const pg = require('pg');

const config = {
    host: 'hungphat_nodejs_start_postgres',
    user: 'postgres',
    password: '',
    database: 'postgres',
    port: 5432,
};

const client = new pg.Client(config);

client.connect(err => {
    if (err) throw err;
    else {
        queryDatabase();
    }
});

function queryDatabase() {
    const query = `
        DROP TABLE IF EXISTS Customer;
        CREATE TABLE customer (id serial PRIMARY KEY, Name VARCHAR(50), dob DATE);
        INSERT INTO  customer (name, dob) VALUES ('Phat', '1993-11-05');
        INSERT INTO  customer (name, dob) VALUES ('Trang', '1993-10-16');
        INSERT INTO  customer (name, dob) VALUES ('Thang', '2000-05-05');
    `;

    client
        .query(query)
        .then(() => {
            console.log('Table created successfully!');
            client.end(console.log('Closed client connection'));
        })
        .catch(err => console.log(err))
        .then(() => {
            console.log('Finished execution');
        });
}