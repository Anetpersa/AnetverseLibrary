import * as SQLite from 'expo-sqlite';

// Otvara (ili pravi) bazu po imenu "anetverse.db"
export const db = SQLite.openDatabaseSync('anetverse.db');

// Kreira tabelu "books" ako ne postoji
export function initDatabase() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS books (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      author TEXT,
      isbn TEXT,
      status TEXT DEFAULT 'unread',
      location TEXT DEFAULT 'living_room'
    );
  `);
}

// Vraća sve knjige iz baze
export function getAllBooks() {
  return db.getAllSync('SELECT * FROM books ORDER BY title ASC');
}