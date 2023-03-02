import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            fugiat voluptatibus ullam assumenda aspernatur cum illo saepe
            similique ratione odit ipsum, sint animi recusandae debitis? Porro
            consequuntur corrupti perferendis veritatis?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            vero delectus quia eveniet quibusdam, libero neque laudantium.
            Asperiores veritatis consequatur qui enim quasi doloribus harum
            ducimus, beatae voluptates excepturi aperiam.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
            <span className="logo">Fstore</span>
            <span className="copyright">
                © Copyright 2023. All Right Reserved
            </span>
        </div>
        <div className="right">
            <img src="/img/payment.png" alt="different payment methods" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
