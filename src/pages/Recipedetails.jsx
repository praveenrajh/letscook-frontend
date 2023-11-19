import React from "react";
import "../styles/recipedetails.css";

const Recipedetails = ({ detail }) => {
  return (
    <div className="res_container">
      <div className="res_row">
        <div className="res_column">
          <div className="res_top">
            <h1 className="res_title">{detail.title}</h1>
            <p className="res_detail">{detail.description}</p>
          </div>
          <div className="res_middle">
            <div className="res_img">
              <img src={detail.img} alt="..." className="res_image" />
            </div>
            <div className="res_incredients">
              <h4 className="inc_title">Incredients</h4>
              <ul className="inc_list">
                {detail.incredients.map((e) => {
                  return <li>{e.inc}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="res_bottom">
            <div className="res_steps">
              <h4 className="stp_title">Steps:</h4>
              <ul className="stp_list">
                {detail.steps.map((e) => {
                  return (
                    <li>
                      <strong>Step {e.no}: </strong>
                      {e.step}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="res_comments">
              <div className="star">
                <h5 className="star_title">Rating:</h5>
                <div className="star_rating">X X X X X</div>
              </div>
              <div className="comments">
                <h5 className="comments_title">Comments:</h5>
                <textarea rows="3" />
                <button className="comment_button">Submit</button>
              </div>
              <div className="comments_view"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipedetails;
