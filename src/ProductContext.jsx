import React, { createContext, useEffect, useState } from "react";

const ContextAPI = createContext({ categories: [] });

function ProductContext({ children }) {
  const [categories, setCategories] = useState([]);

  function handleFetchCategories(fetchedData) {
    const categoriesName = fetchedData.map((category) => {
      return {
        name: category.name,
        slug: category.slug,
      };
    });
    setCategories(categoriesName);
  }

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((body) => {
        handleFetchCategories(body);
      });
  }, []);

  return (
    <ContextAPI.Provider value={{ categories }}>{children}</ContextAPI.Provider>
  );
}

export default ProductContext;
export { ContextAPI };
