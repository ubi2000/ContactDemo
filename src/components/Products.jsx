import React from "react";
import "./Products.css";
import Cat from "../images/cat.jpg";
import Books from "../images/books.jpg";
import Burger from "../images/burger.jpg";
import Football from "../images/football.jpg";
import Table from "../images/table.jpg";
import Pizza from "../images/pizza.jpg";

const Products = () => {
  return (
    <div className="heading">
      <h3>Welcome to General Store</h3>
      <p>Your Home For Everything General</p>
      <div className="products">
        <div>
          <img src={Burger} alt="alt" />
          <p>Offer! Buy One Get One</p>
        </div>
        <div>
          <img src={Pizza} alt="alt" />
          <p>Papparoni Pizza @150</p>
        </div>
        <div>
          <img src={Table} alt="alt" />
          <p>Study Table @500</p>
        </div>
        <div>
          <img src={Books} alt="alt" />
          <p> 40%OFF! on Books </p>
        </div>
        <div>
          <img src={Football} alt="alt" />
          <p> Adidas Combo @5000</p>
        </div>
        <div>
          <img src={Cat} alt="alt" />
          <p> Persian Cats 20%OFF</p>
        </div>
      </div>
    </div>
  );
};
export default Products;
