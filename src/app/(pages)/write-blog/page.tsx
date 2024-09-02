"use client";
import Editor from "@/components/uiElements/editor/Editor";
import { Formik, Field, Form } from "formik";
import React, { useState, useEffect } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";

const Page = () => {
  const [editorContent, setEditorContent] = useState('');

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
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container blog-write-page">
      <Formik
        initialValues={{
          title: '',
          slug: '',
          category: '',
          content: '',
        }}
        onSubmit={async (values, { resetForm }) => {
          const formData = { ...values, content: editorContent };
          if (!Object.values(formData).some(value => value === '')) {
            await addBlogPost(formData);
            resetForm();
            setEditorContent('');
          } else {
            alert('Please fill all fields');
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
              <Field id="slug" name="slug" className="cst-inputs" placeholder="Slug" />
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
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Page;
