
import { query } from './mysql';

export async function fetchBlogData() {
  const sql = 'SELECT * FROM `blogs`'; // Adjust the SQL query as needed
  const rows = await query(sql);
  return (rows as any[]).map((blog) => ({
    id: blog.id,
    title: blog.title,
    slug: blog.slug,
    category: blog.category,
    content: blog.content,
    date: blog.date,
  }));
}
