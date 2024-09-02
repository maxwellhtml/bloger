
import React, { useEffect, useState } from 'react';
import { query } from '@/utils/mysql';
import UpdateDeleteBlog from '@/components/UpdateDeleteBlog';

async function fetchBlogData(slug : any): Promise<any> {
 
  const sql = `SELECT * FROM blogs WHERE slug = ? LIMIT 1`;
    const [rows]  = await query(sql, [slug]) as any;
    
  return  { 
    title: rows.title, 
    slug: rows.slug, 
    category: rows.category, 
    content: rows.content, 
    date: rows.date, 
  }; 
}
export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const articles = await fetchBlogData(slug);
 
  return (
    <div className="container-fluid">
      <main className="tm-main">
        {/* Search form */}
        <div className="row tm-row">
          <div className="col-12">
            <form method="GET" className="form-inline tm-mb-80 tm-search-form">
              <input
                className="form-control tm-search-input"
                name="query"
                type="text"
                placeholder="Search..."
                aria-label="Search"
              />
              <button className="tm-search-button" type="submit">
                <i className="fas fa-search tm-search-icon" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
        <div className="row tm-row">
            <article className="col-12 col-md-12 " key={articles.slug}>
              <hr className="tm-hr-primary" />
              <h2 className="tm-pt-30 tm-color-primary tm-post-title">
                {articles.title}
              </h2>
              <p className="tm-pt-30">{articles.content}</p>
              <div className="d-flex justify-content-between gap-3 tm-pt-45">
                <span className="tm-color-primary">{articles.category}</span>
                <span className="tm-color-primary">{articles.date}</span>
              </div>
                <UpdateDeleteBlog slug={slug} />
              <hr />
            </article>
          {/* ))} */}
        </div>
        <div className="row tm-row tm-mt-100 tm-mb-75">
          <div className="tm-prev-next-wrapper">
            <a
              href="#"
              className="mb-2 tm-btn tm-btn-primary tm-prev-next disabled tm-mr-20"
            >
              Prev
            </a>
            <a href="#" className="mb-2 tm-btn tm-btn-primary tm-prev-next">
              Next
            </a>
          </div>
          <div className="tm-paging-wrapper">
            <span className="d-inline-block mr-3">Page</span>
            <nav className="tm-paging-nav d-inline-block">
              <ul>
                <li className="tm-paging-item active">
                  <a href="#" className="mb-2 tm-btn tm-paging-link">
                    1
                  </a>
                </li>
                <li className="tm-paging-item">
                  <a href="#" className="mb-2 tm-btn tm-paging-link">
                    2
                  </a>
                </li>
                <li className="tm-paging-item">
                  <a href="#" className="mb-2 tm-btn tm-paging-link">
                    3
                  </a>
                </li>
                <li className="tm-paging-item">
                  <a href="#" className="mb-2 tm-btn tm-paging-link">
                    4
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}
