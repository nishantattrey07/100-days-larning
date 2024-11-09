import { Client } from "pg";
import { config } from "dotenv";
config();

console.log("Database URL:", process.env.DB_URL);

const client = new Client({
    connectionString:""
})
async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE userss (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

async function createAddressTable() { 
    await client.connect();
    const result = await client.query(`
        CREATE TABLE address(
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES userss,
        street varchar(500) NOT NULL,
        District varchar(250) NOT NULL,
        State varchar(250) NOT NULL,
        Pincode INTEGER NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`
    );
    console.log(result);
}

async function insertData() { 
    await client.connect();
    const insertQuery = "INSERT INTO address(user_id, street, District, State, Pincode) VALUES($1,$2,$3,$4,$5);";
    
    

    const result = await client.query(insertQuery,[1, 'New York', 'USA', '123 Broadway St', '10001'])
        console.log(result);
        
}

async function getUser() { 
    await client.connect();
    const getQuery = "SELECT * FROM userss WHERE email=$1";
    const result = await client.query(getQuery, ['username1@example.com']);
    console.log(result.rows);
}

insertData();
