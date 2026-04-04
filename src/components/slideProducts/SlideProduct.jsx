import Product from "./Product";
import "./slideProduct.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

function SlideProduct({ title, products }) {
  if (!products) {
    return <p className="loading">Loading {title}...</p>;
  }

  return (
    <div className="slide_products slide">
      <div className="container">
        <div className="top_slide">
          <h2>{title}</h2>
          <p>Best {title} products available now.</p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          navigation
          modules={[Pagination, Navigation, Autoplay]}
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
