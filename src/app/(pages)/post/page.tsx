
import React, { useEffect, useState } from 'react'
import { fetchBlogData } from '@/utils/fetchBlogData';
import Link from 'next/link'
import { query } from '@/utils/mysql';


export default async function Page() {
  const articles = await fetchBlogData();
  return (
    <div className="container-fluid">
    <main className="tm-main">
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
        <div className="col-lg-8 tm-post-col">
          <div className="tm-post-full">
          {articles.map((article) => (
            <div className="mb-4" key={article.slug}>
              <Link href={`post/${article.slug}`} className="effect-lily tm-post-link tm-pt-60">
                <h2 className="tm-pt-30 tm-color-primary tm-post-title">
                  {article.title}
                </h2>
              </Link>
              <p className="tm-mb-40">
                {article.date}
                 </p>
              <p>
                {article.content}
              </p>
              <span className="d-block text-right tm-color-primary">
              {article.category}
              </span>
            </div>
             ))}
            </div>
        </div>
        <aside className="col-lg-4 tm-aside-col">
          <div className="tm-post-sidebar">
            <hr className="mb-3 tm-hr-primary" />
            <h2 className="mb-4 tm-post-title tm-color-primary">Categories</h2>
            <ul className="tm-mb-75 pl-5 tm-category-list">
              <li>
                <a href="#" className="tm-color-primary">
                  Visual Designs
                </a>
              </li>
              <li>
                <a href="#" className="tm-color-primary">
                  Travel Events
                </a>
              </li>
              <li>
                <a href="#" className="tm-color-primary">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="tm-color-primary">
                  Video and Audio
                </a>
              </li>
              <li>
                <a href="#" className="tm-color-primary">
                  Etiam auctor ac arcu
                </a>
              </li>
              <li>
                <a href="#" className="tm-color-primary">
                  Sed im justo diam
                </a>
              </li>
            </ul>
            <hr className="mb-3 tm-hr-primary" />
            <h2 className="tm-mb-40 tm-post-title tm-color-primary">
              Related Posts
            </h2>
            <a href="#" className="d-block tm-mb-40">

                  Duis mollis diam nec ex viverra scelerisque a sit
                
            </a>
            <a href="#" className="d-block tm-mb-40">
              <figure>
              
                <figcaption className="tm-color-primary">
                  Integer quis lectus eget justo ullamcorper ullamcorper
                </figcaption>
              </figure>
            </a>
            <a href="#" className="d-block tm-mb-40">
              <figure>
               
                <figcaption className="tm-color-primary">
                  Nam lobortis nunc sed faucibus commodo
                </figcaption>
              </figure>
            </a>
          </div>
        </aside>
      </div>
    </main>
  </div>
  )}

