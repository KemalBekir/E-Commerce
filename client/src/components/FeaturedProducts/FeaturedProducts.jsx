import { Card } from "@mui/material";
import React from "react";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const data = [{}];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          voluptatum, illo laudantium aspernatur expedita porro itaque nam ex
          provident nemo in debitis nobis earum a necessitatibus! Est vitae
          dicta cumque?
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
