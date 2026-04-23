import React from "react";
import { CiHeart } from "react-icons/ci";

function ProductActions({
  onAddToCart,
  onAddToFavorites,
  isFavorite = false,
  inCart = false,
}) {
  return (
    <div className="product_actions">
      <button
        className={`btn ${inCart ? "in-cart" : ""}`}
        onClick={onAddToCart}
        disabled={inCart}
      >
        {inCart ? "Added to Cart" : "Add to Cart"}
      </button>

      <button
        className={`favorite_btn ${isFavorite ? "active" : ""}`}
        onClick={onAddToFavorites}
        aria-label="Add to favorites"
      >
        <CiHeart />
      </button>
    </div>
  );
}

export default ProductActions;
