import React, { useState } from "react";
import web3 from "./images/picture2.jpg";

const Contact = () => {

  const [data, setData] = useState({
    fullname: "",
    contact: "",
    email: "",
    msg: ""
  });

  const EventInput = (event) => {
    const {name, value} = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name] : value,
      }
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Hi ${data.fullname}`)
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    FullName :
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={data.fullname}
                    onChange={EventInput}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Contact :
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="contact"
                    value={data.contact}
                    onChange={EventInput}
                    placeholder="Enter your contact number"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email :
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={data.email}
                    onChange={EventInput}
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message :
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    name="msg"
                    value={data.msg}
                    onChange={EventInput}
                    rows="3"
                  ></textarea>
                </div>
                <div class="col-12">
                  <button class="btn-get-started" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
