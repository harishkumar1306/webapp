import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1 className="mt-5">
                  <strong className="brand">{props.name}</strong>
                </h1>
                <p className="mt-3">
                  You most likely use React apps everyday, while watching your
                  favorite TV shows, browsing through social media and checking
                  your email. Find out which famous companies built their apps
                  with ReactJS and why.
                </p>
                <p>
                  Major apps like Facebook, Instagram, Netflix and others are
                  constantly improving their experience and adapting to new
                  frameworks and trends.
                </p>
                <p>As the UI engineers at Netflix state in the blog post:</p>
                <blockquote>
                  <p>
                    <i>
                      "Our decision to adopt React was influenced by a number of
                      factors, most notably: 1) startup speed, 2) runtime
                      performance, 3) modularity "
                    </i>
                  </p>
                </blockquote>
                <div className="mt-3">
                  <NavLink to={props.visit} className="btn-get-started">
                    {props.btnName}
                  </NavLink>
                </div>
              </div>
              {/* <div className="col-lg-6 order-1 header-img">
                <img src={props.imgsrc} className="img-fluid" alt="image" />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
