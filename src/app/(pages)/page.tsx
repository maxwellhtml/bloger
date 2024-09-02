"use client";
import Image from "next/image";
import styles from "./page.module.css";
import img1 from "@/../../public/assets/img/img-01.jpg";
import img2 from "@/../../public/assets/img/img-02.jpg";
import img3 from "@/../../public/assets/img/img-03.jpg";
import img4 from "@/../../public/assets/img/img-04.jpg";
import img5 from "@/../../public/assets/img/img-05.jpg";
import img6 from "@/../../public/assets/img/img-06.jpg";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [blogdata, setBlogData] = useState([]);

  useEffect(() => {
    localStorage.getItem('blog-data') && setBlogData(JSON.parse(localStorage.getItem('blog-data') || '[]'));
  }, [])
  console.log(blogdata)
  return (
    <>
      <div className="container-fluid">
        <main className="tm-main">
          {/* Search form */}
          <div className="row tm-row">
            <div className="col-12">
              <form
                method="GET"
                className="form-inline tm-mb-80 tm-search-form"
              >
                <input
                  className="form-control tm-search-input"
                  name="query"
                  type="text"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <button className="tm-search-button" type="submit">
                  <i
                    className="fas fa-search tm-search-icon"
                    aria-hidden="true"
                  />
                </button>
              </form>
            </div>
          </div>
          <div className="row tm-row">
            {blogdata.map((item: any) => (
            <article className="col-12 col-md-6 tm-post" key={item.slug}>
              <hr className="tm-hr-primary" />
              <Link href={`/post/${item.slug}`} className="effect-lily tm-post-link tm-pt-60">
                {/* <div className="tm-post-link-inner">
                  <Image src={`img{1++}`}
                   width={350}
                   height={300}
                  alt="Image" className="Image-fluid" />
                </div> */}
                <h2 className="tm-pt-30 tm-color-primary tm-post-title">
                  {item.title}
                </h2>
              </Link>
              <p className="tm-pt-30">
              {item.content}
              </p>
              <div className="d-flex justify-content-between gap-3 tm-pt-45">
                <span className="tm-color-primary">
                  {item.categorie}
                </span>
                <span className="tm-color-primary">
                  {item.date}
                </span>
              </div>
              <hr />
              {/* <div className="d-flex justify-content-between">
                <span>36 comments</span>
                <span>by Admin Nat</span>
              </div> */}
            </article>
            ))}
           
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
    </>
  );
}
