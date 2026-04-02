import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

function BtmHeader() {
  const [categories, setCategories] = useState([]);

  function handleFetchCategories(fetchedData) {
    const categoriesName = fetchedData.map((category) => {
      return {
        name: category.name,
        slug: category.slug,
      };
    });
    console.log(categoriesName);
    setCategories(categoriesName);
  }

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((body) => handleFetchCategories(body));
  }, []);

  return (
    <div className="btm_header">
      <div className="container">
        <nav>
          <div className="category_nav">
            <div className="category_btn">
              <IoMdMenu />
              <p>Browse Category</p>
              <IoMdArrowDropdown />
            </div>

            <div className="category_nav_list"></div>

            <div className="nav_links">
              <Link to="/"></Link>
              <Link to="/"></Link>
              <Link to="/"></Link>
              <Link to="/"></Link>
              <Link to="/"></Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default BtmHeader;
