// /app/page.tsx
import { fetchBlogData } from '@/utils/fetchBlogData';
import { query } from '../utils/mysql';
import Link from 'next/link';  // Import the Article type

export default async function HomePage() {
  const articles = await fetchBlogData();  // Fetch articles directly

  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="article-list">
        {articles.map((article) => (
          <div key={article.slug} className="article">
            <h2>Title: {article.title}</h2>
            <p>Content: {article.content}</p>
            <p>Slug: {article.slug}</p>
            <Link href={`/posts/${article.slug}`}>
              <span>Read More</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
