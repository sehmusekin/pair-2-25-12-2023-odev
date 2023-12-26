import React from "react";

const ProductDetail = (props) => {
  return (
    <>
      {props.images && props.images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ objectFit: "cover", height: "500px" }}
          />
        </div>
      ))}
    </>
  );
};

export default ProductDetail;
