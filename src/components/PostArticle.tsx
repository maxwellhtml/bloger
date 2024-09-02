import { FC } from 'react';

interface Article {
  title: string;
  slug: string;
  category: string;
  content: string;
  date: string;
  post: string;
}

interface PostArticleProps {
  post: Article;
}

const PostArticle: FC<PostArticleProps> = ({ post }) => {
  return (
    <article>
      <h1>{post.title}</h1>
      <p><strong>Category:</strong> {post.category}</p>
      <p><strong>Date:</strong> {post.date}</p>
      <div>
        <p>{post.content}</p>
      </div>
    </article>
  );
};

export default PostArticle;
