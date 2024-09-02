// /app/api/addBlog/route.ts
import { NextResponse } from 'next/server';
import { query } from '../../../utils/mysql'; // Assuming your MySQL connection is in utils/mysql.ts

export async function POST(request: Request) {
  try {
    const { title, slug, content, category } = await request.json();
    // const date = new Date().toISOString(); // Use the current date
    const date = new Date().toLocaleString(); // Use the current date

    const sql = 'INSERT INTO blogs (title, slug, content, category, date) VALUES (?, ?, ?, ?, ?)';
    await query(sql, [title, slug, content, category, date]);

    return NextResponse.json({ message: 'Blog post added successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error inserting blog post:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
 