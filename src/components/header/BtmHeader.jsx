import { useContext, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";

import { NavLinks } from "../../DATA.JS";
import { ContextAPI } from "../../ProductContext";

function BtmHeader() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const CategoriesContext = useContext(ContextAPI);
  return (
    <div className="btm_header">
      <div className="container">
        <nav className="nav">
          <div className="category_nav">
            <div
              className="category_btn"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <IoMdMenu />
              <p>Browse Category</p>
              <IoMdArrowDropdown />
            </div>

            <div
              className={`category_nav_list ${isCategoryOpen ? "active" : ""}`}
            >
              {CategoriesContext.categories.map((category) => (
                <Link key={category.slug} to={`category/${category.slug}`}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav_links">
            {NavLinks.map((item) => (
              <li
                key={item.link}
                className={location.pathname === item.link ? "active" : ""}
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </div>
        </nav>

        <div className="sign_regs_icon">
          <Link to="/">
            <PiSignInBold />
          </Link>
          <Link to="/">
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BtmHeader;
