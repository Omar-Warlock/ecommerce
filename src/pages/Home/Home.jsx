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

  useEffect(() => {
    Promise.all(
      categories.map((cat) =>
        fetch(`https://dummyjson.com/products/category/${cat}`)
          .then((res) => res.json())
          .then((data) => ({
            category: cat,
            products: data.products,
          })),
      ),
    )
      .then((data) => {
        const formatted = {};
        data.forEach((item) => {
          formatted[item.category] = item.products;
        });

        setResults(formatted);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <HeroSlider />

      {categories.map((cat) => (
        <SlideProduct key={cat} title={cat} products={results[cat]} />
      ))}
    </div>
  );
}

export default Home;
