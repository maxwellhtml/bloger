"use client";
import Editor from "@/components/uiElements/editor/Editor";
import { Formik, Field, Form } from "formik";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const params = useSearchParams();
  const router = useRouter();
  const slug = params.get('slug');

  const [editorContent, setEditorContent] = useState('');
  const [initialValues, setInitialValues] = useState({
    title: '',
    slug: '',
    category: '',
    content: '',
  });

  useEffect(() => {
    if (slug) {
      const fetchBlog = async () => {
        try {
          const response = await fetch(`/api/blogs/${slug}`);
          if (response.ok) {
            const blog = await response.json();
            setInitialValues({
              title: blog.title,
              slug: blog.slug,
              category: blog.category,
              content: blog.content,
            });
            setEditorContent(blog.content);
          } else {
            console.error('Failed to fetch blog');
          }
        } catch (error) {
          console.error('Failed to fetch blog:', error);
        }
      };
      fetchBlog();
    }
  }, [slug]);

  const updateBlogPost = async (formData: any) => {
    try {
      const response = await fetch(`/api/blogs/update/${slug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update blog post');
      }

      const result = await response.json();
      console.log(result.message);
      router.push('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const addBlogPost = async (formData: any) => {
    try {
      const response = await fetch('/api/addBlog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add blog post');
      }

      const result = await response.json();
      console.log(result.message);
      router.push('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container blog-write-page">
      <Formik
        initialValues={slug ? initialValues : {
          title: '',
          slug: '',
          category: '',
          content: '',
        }}
        enableReinitialize={!!slug}
        onSubmit={async (values, { resetForm }) => {
          const formData = { ...values, content: editorContent };
          if (!slug) {
            if (!Object.values(formData).some(value => value === '')) {
              await addBlogPost(formData);
              resetForm();
              setEditorContent('');
            } else {
              alert('Please fill all fields');
            }
          } else {
            await updateBlogPost(formData);
          }
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <Field id="title" name="title" className="cst-inputs" placeholder="Title" />
            </div>
            <div>
              <label htmlFor="slug">Slug</label>
              <Field id="slug" name="slug" className="cst-inputs" placeholder="Slug" disabled={!!slug} />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <Field id="category" name="category" className="cst-inputs" placeholder="Category" />
            </div>
            <Editor
              content={editorContent}
              setContent={(content) => {
                setEditorContent(content);
                setFieldValue('content', content);
              }}
            />
            <button className="btn btn-primary mt-3" type="submit">
              {slug ? 'Update Blog' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Page;
