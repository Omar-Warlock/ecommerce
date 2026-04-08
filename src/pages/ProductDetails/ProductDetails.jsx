import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextAPI } from "../../ProductContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .then((data) => setLoading(false))
      .catch((err) => console.error(err.message));
  }, [id]);
  if (loading === true) {
    return <p>Loading ...</p>;
  }

  return <div>{product.title}</div>;
}

export default ProductDetails;
