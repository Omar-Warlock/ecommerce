import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductLoader from "./ProductLoader";
import "./productdetails.css";
import SlideProduct from "../../components/slideProducts/SlideProduct";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        setRelatedLoading(true);

        setProduct(null);
        setRelatedProducts([]);

        const productRes = await fetch(`https://dummyjson.com/products/${id}`);
        const productData = await productRes.json();

        if (ignore) return;

        setProduct(productData);
        setLoading(false);

        const relatedRes = await fetch(
          `https://dummyjson.com/products/category/${productData.category}`,
        );
        const relatedData = await relatedRes.json();

        if (ignore) return;

        const filteredRelated = (relatedData.products || []).filter(
          (item) => item.id !== Number(id),
        );

        setRelatedProducts(filteredRelated);
        setRelatedLoading(false);
      } catch (err) {
        console.error(err.message);
        if (!ignore) {
          setLoading(false);
          setRelatedLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <>
        <ProductLoader />
        <SlideProduct title="Related Products" products={[]} loading={true} />
      </>
    );
  }

  if (!product) {
    return (
      <p style={{ textAlign: "center", marginTop: "40px" }}>
        No product found.
      </p>
    );
  }

  return (
    <>
      <div className="item_details">
        <div className="container">
          <ProductGallery images={product.images} title={product.title} />
          <ProductInfo product={product} />
        </div>
      </div>

      <SlideProduct
        title="Related Products"
        products={relatedProducts}
        loading={relatedLoading}
      />
    </>
  );
}

export default ProductDetails;
