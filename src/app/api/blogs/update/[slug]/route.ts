import { NextResponse } from 'next/server';
import { query } from '@/utils/mysql';

// Define the PUT request handler for updating the blog
export async function PUT(req: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const { title, content, category } = await req.json();

  try {
    // Execute the update query
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
