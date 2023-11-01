import React, { useState } from "react";

const Contact = () => {
   const [inp,setInp] =useState({
    fullname: "",
    phone: "",
    email: "",
    msg: ""
   });

    const input = (e) =>{
        //  const {name,val} = e.target;
        const name = e.target.name;
        const val = e.target.value 

         setInp((preval)=>{
            return{
                ...preval,
                [name]: val,
            }
         })
    }

    const formSub = (e) =>{
        e.preventDefault();
        alert(`My name is ${inp.fullname}. My Mobile Number is ${inp.phone} and Email is ${inp.email}, Here is what I want to say ${inp.msg}`);
    }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSub}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Name"
                  name="fullname"
                  value={inp.fullname}
                  onChange={input}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Mobile Number"
                  name="phone"
                  value={inp.phone}
                  onChange={input}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                  value={inp.email}
                  onChange={input}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={inp.msg}
                  onChange={input}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
