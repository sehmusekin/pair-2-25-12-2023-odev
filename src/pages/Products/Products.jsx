import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import AddProduct from "../../components/ProductAdd/CreateProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts) {
      setProducts(storedProducts);
    } else {
      axios
        .get("https://dummyjson.com/products")
        .then((response) => {
          setProducts(response.data.products);

          localStorage.setItem(
            "products",
            JSON.stringify(response.data.products)
          );
        })
        .catch((error) => {
          console.error("Veri çekilirken bir hata oluştu:", error);
        });
    }
  }, []);

  const handleDeleteSuccess = (deletedProductId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== deletedProductId)
    );
    localStorage.setItem("products", JSON.stringify(products));
    console.log(deletedProductId + " no id' li ürün sistemden silindi.");
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);

    localStorage.setItem("products", JSON.stringify([...products, newProduct]));
    console.log("Yeni ürün eklendi:", newProduct);
  };

  return (
    <div className="container mt-3 mt-md-3">
      {isVisible && <AddProduct onAddProduct={handleAddProduct} />}

      <div className="row mt-3">
        {products.map((product) => (
          <div
            className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3"
            key={product.id}
          >
            <ProductCard
              product={product}
              onDeleteSuccess={handleDeleteSuccess}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
