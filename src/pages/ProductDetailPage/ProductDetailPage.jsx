// ProductDetail.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.error("Ürün detayları getirilirken bir hata oluştu", error);
      }
    };

    fetchProductDetail();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <ProductDetail images={product.images} />
          </div>
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
