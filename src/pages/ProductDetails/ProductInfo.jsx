import React from "react";
import { FaRegHeart, FaShare } from "react-icons/fa";
import RatingStars from "./RatingStars";
import { TiShoppingCart } from "react-icons/ti";

import { CiHeart } from "react-icons/ci";
function ProductInfo({ product }) {
  return (
    <div className="details_item">
      <h1 className="name">{product.title}</h1>

      <RatingStars />

      <p className="price">$ {product.price}</p>

      <h5>
        Availability : <span>{product.availabilityStatus || "In Stock"}</span>
      </h5>

      <h5>
        Brand : <span>{product.brand || "Unknown"}</span>
      </h5>

      <p className="desc">{product.description}</p>

      <h5 className="stock">
        <span>Hurry Up! Only {product.stock} products left in stock.</span>
      </h5>

      <button className="btn">
        Add to cart <TiShoppingCart />
      </button>

      <div className="icons">
        <span>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default ProductInfo;
