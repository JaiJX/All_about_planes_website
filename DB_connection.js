console.log("Hi Script is running from DB_connection.js");
const { neon } = require('@neondatabase/serverless');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_8ZhxeCOYVK2v@ep-dawn-river-ak83xlni-pooler.c-3.us-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

async function getData() {
    console.log("starting get data");
    const sql = neon(DATABASE_URL);
    const posts = await sql`SELECT * FROM user_info`;
    console.log(posts);
}

async function sendData() {
    console.log("Sending data");
    const sql = neon(DATABASE_URL);
    const posts = await sql`INSERT INTO user_info VALUES ('004', 'Evan', 'Evan@gmail.com')`;
    console.log(posts);
}

async function updateData() {
    console.log("Updating data");
    const sql = neon(DATABASE_URL);
    const posts = await sql`UPDATE user_info SET name = "bigger" WHERE id = "002"`;
    console.log(posts);
}

async function deleteData() {
    console.log("Deleting data");
    const sql = neon(DATABASE_URL);
    const posts = await sql`DELETE FROM user_info WHERE id = "004"`;
    console.log(posts);
}



deleteData().catch((error) => {
    console.error('failed:', error);
    process.exitCode = 1;
});
