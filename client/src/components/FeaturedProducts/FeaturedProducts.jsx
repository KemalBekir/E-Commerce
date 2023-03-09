import React from "react";
import "./FeaturedProducts.scss";
import { Card } from "../Card/Card";
import useFetch from "../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

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
        {error
          ? "sometihng went wrong"
          : loading
          ? "loading"
          : data.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
