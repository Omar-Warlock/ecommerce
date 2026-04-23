import React, { useState } from "react";

function ProductGallery({ images = [], title }) {
  const [selectedImage, setSelectedImage] = useState(images[0] || "");

  return (
    <div className="imgs_item">
      <div className="big_img">
        <img src={selectedImage} alt={title} />
      </div>

      <div className="sm_img">
        {images.map((image, index) => (
          <div key={`div-${index}`} className="img_div_sm">
            <img
              key={image}
              src={image}
              alt={title}
              onClick={() => setSelectedImage(image)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
