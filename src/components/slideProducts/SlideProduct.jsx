import Product from "./Product";
import "./slideProduct.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

function SlideProduct({ title, products = [], loading = false }) {
  if (loading) {
    return (
      <div className="slide_products slide">
        <div className="container">
          <div className="top_slide">
            <h2>{title}</h2>
            <p>Best {title} products available now.</p>
          </div>

          <div className="products_skeleton_grid">
            {[...Array(5)].map((_, index) => (
              <div className="product_skeleton_card" key={index}>
                <div className="skeleton skeleton-card-img"></div>
                <div className="skeleton skeleton-card-title"></div>
                <div className="skeleton skeleton-card-stars"></div>
                <div className="skeleton skeleton-card-price"></div>
                <div className="skeleton-icons">
                  <div className="skeleton skeleton-icon"></div>
                  <div className="skeleton skeleton-icon"></div>
                  <div className="skeleton skeleton-icon"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
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
          loop={products.length > 1}
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
                id={item.id}
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
