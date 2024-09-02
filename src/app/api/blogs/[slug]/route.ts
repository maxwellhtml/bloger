import { NextResponse } from 'next/server';
import { query } from '@/utils/mysql';

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    const sql = `SELECT * FROM blogs WHERE slug = ?`;
    const blogs = await query(sql, [slug]) as any;

    if (blogs.length > 0) {
      return NextResponse.json(blogs[0]);
    } else {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ message: 'Error fetching blog' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const { title, content, category } = await req.json();

  try {
    const sql = `UPDATE blogs SET title = ?, content = ?, category = ? WHERE slug = ?`;
    const result = await query(sql, [title, content, category, slug]) as any;

    if (result.affectedRows > 0) {
      return NextResponse.json({ message: 'Blog updated successfully' });
    } else {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json({ message: 'Error updating blog' }, { status: 500 });
  }
}