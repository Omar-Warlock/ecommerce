import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";

function Product({ title, price, image, id }) {
  return (
    <Link to={`/products/${id}`}>
      <div className="product">
        <div className="img_product">
          <img src={image} alt={title} />
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
          <span>
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
