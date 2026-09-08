import { Client } from "pg";
import "dotenv/config";

const SQL = `
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category_id INTEGER NOT NULL REFERENCES categories(id)
);

INSERT INTO categories (name) VALUES
('Fiction'),
('Science Fiction'),
('Fantasy'),
('History'),
('Biography'),
('Self-Help');

INSERT INTO items (title, category_id) VALUES
('To Kill a Mockingbird', 1),
('Pride and Prejudice', 1),
('The Great Gatsby', 1),

('Dune', 2),
('Neuromancer', 2),
('The Martian', 2),

('The Hobbit', 3),
('A Game of Thrones', 3),
('The Name of the Wind', 3),

('Sapiens', 4),
('Guns, Germs, and Steel', 4),
('A People''s History of the United States', 4),

('Steve Jobs', 5),
('Educated', 5),
('The Diary of a Young Girl', 5),

('Atomic Habits', 6),
('The 7 Habits of Highly Effective People', 6),
('Deep Work', 6);
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
