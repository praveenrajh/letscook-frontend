import React from "react";
import "../styles/catagories.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Login from "../assets/login.jpg";

const Catagories = () => {
  return (
    <div className="cat_container">
      <div className="cat_row">
        <div className="cat_column">
          <div className="cat_top">
            <h1 className="cat_title">Catagories Title</h1>
            <p className="cat_detail">
              Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder
              text used in design when creating content. It helps designers plan
              out where the content will sit, without needing to wait for the
              content to be written and approved. It originally comes from a
              Latin text, but to today's reader, it's seen as gibberish. Lorem
              Ipsum, sometimes referred to as 'lipsum', is the placeholder text
              used in design when creating content.
            </p>
          </div>
          <div className="cat_bottom">
            <div className="cat_content">
              <div className="cat_card">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={Login} />
                  <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                      Lorem Ipsum, sometimes referred to as 'lipsum', is the
                      placeholder text used in des
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
