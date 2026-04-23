import { useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import "./Home.css";

const categories = [
  "smartphones",
  "laptops",
  "mens-watches",
  "tablets",
  "womens-watches",
  "groceries",
];

function Home() {
  const [results, setResults] = useState({});
  const [loadingMap, setLoadingMap] = useState(
    categories.reduce((acc, cat) => {
      acc[cat] = true;
      return acc;
    }, {}),
  );

  useEffect(() => {
    categories.forEach((cat) => {
      fetch(`https://dummyjson.com/products/category/${cat}`)
        .then((res) => res.json())
        .then((data) => {
          setResults((prev) => ({
            ...prev,
            [cat]: data.products || [],
          }));

          setLoadingMap((prev) => ({
            ...prev,
            [cat]: false,
          }));
        })
        .catch((err) => {
          console.error(err);
          setLoadingMap((prev) => ({
            ...prev,
            [cat]: false,
          }));
        });
    });
  }, []);

  return (
    <div>
      <HeroSlider />

      {categories.map((cat) => (
        <SlideProduct
          key={cat}
          title={cat}
          products={results[cat] || []}
          loading={loadingMap[cat]}
        />
      ))}
    </div>
  );
}

export default Home;
