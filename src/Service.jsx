import React from "react";
import { NavLink } from "react-router-dom";
import web from "./images/picture.jpg"

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={web} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Web Development</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink to="" className="btn-get-started">
                      More details
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={web} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Software Development</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink to="" className="btn-get-started">
                      More details
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={web} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Digital Marketing</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink to="" className="btn-get-started">
                      More details
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={web} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Android App</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink to="" className="btn-get-started">
                      More details
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={web} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Machine Learning</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink to="" className="btn-get-started">
                      More details
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={web} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Artificial Intelligence</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <NavLink to="" className="btn-get-started">
                      More details
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
