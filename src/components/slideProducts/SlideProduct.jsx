import { useContext } from "react";
import Product from "./Product";
import "./slideProduct.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { ContextAPI } from "../../ProductContext";

function SlideProduct() {
  const { products } = useContext(ContextAPI);

  return (
    <div className="slide_products slide">
      <div className="container">
        <div className="top_slide">
          <h2>Smart Phones</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <Product
                title={item.title}
                price={item.price}
                image={item.images[0]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideProduct;
