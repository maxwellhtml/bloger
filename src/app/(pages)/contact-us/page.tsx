import React from 'react'

const page = () => {
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
      <div className="row tm-row tm-mb-45">
        <div className="col-12">
          <hr className="tm-hr-primary tm-mb-55" />
          <div className="gmap_canvas">
            {" "}
            {/* Google Map */}
            <iframe
              width="100%"
              height={477}
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
            />
          </div>
        </div>
      </div>
      <div className="row tm-row tm-mb-120">
        <div className="col-12">
          <h2 className="tm-color-primary tm-post-title tm-mb-60">Contact Us</h2>
        </div>
        <div className="col-lg-7 tm-contact-left">
          <form
            method="POST"
            action=""
            className="mb-5 ml-auto mr-0 tm-contact-form"
          >
            <div className="form-group row mb-4">
              <label
                htmlFor="name"
                className="col-sm-3 col-form-label text-right tm-color-primary"
              >
                Name
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control mr-0 ml-auto"
                  name="name"
                  id="name"
                  type="text"
                
                />
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="email"
                className="col-sm-3 col-form-label text-right tm-color-primary"
              >
                Email
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control mr-0 ml-auto"
                  name="email"
                  id="email"
                  type="email"
               
                />
              </div>
            </div>
            <div className="form-group row mb-4">
              <label
                htmlFor="subject"
                className="col-sm-3 col-form-label text-right tm-color-primary"
              >
                Subject
              </label>
              <div className="col-sm-9">
                <input
                  className="form-control mr-0 ml-auto"
                  name="subject"
                  id="subject"
                  type="text"
            
                />
              </div>
            </div>
            <div className="form-group row mb-5">
              <label
                htmlFor="message"
                className="col-sm-3 col-form-label text-right tm-color-primary"
              >
                Message
              </label>
              <div className="col-sm-9">
                <textarea
                  className="form-control mr-0 ml-auto"
                  name="message"
                  id="message"
                  rows={8}
                 
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="form-group row text-right">
              <div className="col-12">
                <button className="tm-btn tm-btn-primary tm-btn-small">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-5 tm-contact-right">
          <address className="mb-4 tm-color-gray">
            120 Lorem ipsum dolor sit amet, consectetur adipiscing 10550
          </address>
          <span className="d-block">
            Tel:
            <a href="tel:060-070-0980" className="tm-color-gray">
              060-070-0980
            </a>
          </span>
          <span className="mb-4 d-block">
            Email:
            <a href="mailto:info@company.com" className="tm-color-gray">
              info@company.com
            </a>
          </span>
          <p className="mb-5 tm-line-height-short">
            Maecenas eu mi eu dui cursus consequat non eu metus. Morbi ac turpis
            eleifend, commodo purus eget, commodo mauris.
          </p>
          <ul className="tm-social-links">
            <li className="mb-2">
              <a
                href="https://facebook.com"
                className="d-flex align-items-center justify-content-center"
              >
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://twitter.com"
                className="d-flex align-items-center justify-content-center"
              >
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://youtube.com"
                className="d-flex align-items-center justify-content-center"
              >
                <i className="fab fa-youtube" />
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://instagram.com"
                className="d-flex align-items-center justify-content-center mr-0"
              >
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
  
  )
}

export default page
