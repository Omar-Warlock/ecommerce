import React from "react";

function ProductLoader() {
  return (
    <div className="loading_Item">
      <div className="item_details">
        <div className="container">
          <div className="imgs_item">
            <div className="skeleton skeleton-big-img"></div>

            <div className="sm_img">
              <div className="img_div_sm">
                <div className="skeleton skeleton-sm-img"></div>
              </div>
              <div className="img_div_sm">
                <div className="skeleton skeleton-sm-img"></div>
              </div>
              <div className="img_div_sm">
                <div className="skeleton skeleton-sm-img"></div>
              </div>
              <div className="img_div_sm">
                <div className="skeleton skeleton-sm-img"></div>
              </div>
            </div>
          </div>

          <div className="details_item">
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-stars"></div>
            <div className="skeleton skeleton-price"></div>
            <div className="skeleton skeleton-line"></div>
            <div className="skeleton skeleton-line"></div>
            <div className="skeleton skeleton-desc"></div>
            <div className="skeleton skeleton-desc short"></div>
            <div className="skeleton skeleton-stock"></div>

            <div className="skeleton-actions">
              <div className="skeleton skeleton-btn"></div>
              <div className="skeleton skeleton-icon-circle"></div>
              <div className="skeleton skeleton-icon-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductLoader;
