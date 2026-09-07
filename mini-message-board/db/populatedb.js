import { Client } from "pg";
import "dotenv/config";

const SQL = `
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    text TEXT,
    username VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, username)
VALUES ('Hello, PostgresSQL!', 'ali');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
