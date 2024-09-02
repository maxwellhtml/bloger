import { NextResponse } from 'next/server';
import { query } from '@/utils/mysql';

// Define the DELETE request handler
export async function DELETE(req: Request, { params }: { params: { slug: string } })  {
  const { slug } = params;

  try {
    // Execute the delete query
    const sql = `DELETE FROM blogs WHERE slug = ?`;
    const result = await query(sql, [slug]) as any; 

    if (result.affectedRows > 0) {
      return NextResponse.json({ message: 'Blog deleted successfully' });
    } else {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ message: 'Error deleting blog' }, { status: 500 });
  }
}
