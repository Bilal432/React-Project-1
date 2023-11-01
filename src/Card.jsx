import React from "react";
import img from "../src/Images/img1.jpg";
import { NavLink } from "react-router-dom";

const Card = (probs) => {
  return (
    <>
        <div className="col-md-4 col-10 mx-auto">
          <div className="card">
            <img src={probs.imgsrc} class="card-img-top" alt="card" />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{probs.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="" class="btn btn-primary">
                Go somewhere
              </NavLink>
            </div>
          </div>
        </div>
    </>
  );
};

export default Card;
