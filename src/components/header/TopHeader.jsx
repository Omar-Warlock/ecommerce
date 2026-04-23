import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// assets
import Logo from "/src/img/logo.png";
//icons
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import "./header.css";
import { CartContext } from "../context/CartContext";
function TopHeader() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="top_header">
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="website logo" />
        </Link>
        <form action="" className="search_box">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="search for a products"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>

        <div className="header_icons">
          <div className="icon">
            <CiHeart />
            <span className="count">0</span>
          </div>
          <div className="icon">
            <TiShoppingCart />

            <span className="count">{cartItems.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
