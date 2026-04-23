import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Product({ item }) {
  const { cartItems, addToCart } = useContext(CartContext);

  const { id, title, price, images } = item;

  const isInCart = cartItems.some((product) => product.id === id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isInCart) {
      addToCart(item);
    }
  };

  return (
    <Link to={`/products/${id}`}>
      <div className={`product ${isInCart ? "in-cart" : ""}`}>
        <div className="img_product">
          <img src={images?.[0]} alt={title} />
        </div>

        <p className="name_product">{title}</p>

        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>

        <p className="price">$ {price}</p>

        <div className="icons">
          <span className="btn_addtocart" onClick={handleAddToCart}>
            <FaCartArrowDown />
          </span>

          <span>
            <FaRegHeart />
          </span>

          <span>
            <FaShare />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Product;
