'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface UpdateDeleteBlogProps {
  slug: string;
}

const UpdateDeleteBlog: React.FC<UpdateDeleteBlogProps> = ({ slug }) => {
  const router = useRouter();

  const deleteBlog = async () => {
    try {
      const response = await fetch(`/api/blogs/delete/${slug}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        router.push('/');
      } else {
        const data = await response.json();
        console.error('Error deleting blog:', data.message);
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const navigateToUpdate = () => {
    router.push(`/write-blog?slug=${slug}`);
  };

  return (
    <>
      <button onClick={deleteBlog} className="btn btn-danger">
        Delete Blog
      </button>
      <button onClick={navigateToUpdate} className="btn btn-green ml-4">
        Update Blog
      </button>
    </>
  );
};

export default UpdateDeleteBlog;
