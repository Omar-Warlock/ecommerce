import React, { createContext, useEffect, useState } from "react";

const ContextAPI = createContext({ products: [], categories: [] });

function ProductContext({ children }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  function handleFetchCategories(fetchedData) {
    const categoriesName = fetchedData.map((category) => {
      return {
        name: category.name,
        slug: category.slug,
      };
    });
    setCategories(categoriesName);
  }

  function handleFetchProducts(fetchedData) {
    const products = fetchedData.products;
    setProducts(products);
  }

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((body) => {
        handleFetchCategories(body);
      });
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((body) => {
        handleFetchProducts(body);
      });
  }, []);

  return (
    <ContextAPI.Provider value={{ categories, products }}>
      {children}
    </ContextAPI.Provider>
  );
}

export default ProductContext;
export { ContextAPI };
