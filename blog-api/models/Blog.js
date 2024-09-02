const pool = require('../config/db');

class Blog {
  static async create({ title, slug, content }) {
    const [rows] = await pool.query(
      'INSERT INTO blogs (title, slug, content) VALUES (?, ?, ?)',
      [title, slug, content]
    );
    return rows;
  }

  static async findAll() {
    const [rows] = await pool.query('SELECT * FROM blogs');
    return rows;
  }

  static async findById(id) {
    const [rows] = await pool.query('SELECT * FROM blogs WHERE id = ?', [id]);
    return rows[0];
  }

  static async update(id, { title, slug, content }) {
    const [result] = await pool.query(
      'UPDATE blogs SET title = ?, slug = ?, content = ? WHERE id = ?',
      [title, slug, content, id]
    );
    return result;
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM blogs WHERE id = ?', [id]);
    return result;
  }
}

module.exports = Blog;
