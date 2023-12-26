import React, { useState } from "react";
import axios from "axios";

const AddProduct = (props) => {
  const [newProduct, setNewProduct] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleImagesChange = (e) => {
    const { value } = e.target;

    setNewProduct((prevProduct) => ({
      ...prevProduct,
      images: value.split(","),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://dummyjson.com/products/add",
        newProduct
      );
      console.log("Yeni ürün eklendi:", response.data);
      props.onAddProduct(response.data);
    } catch (error) {
      console.error("Ürün eklenirken hata oluştu:", error);
    }
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-md-center">
          <div className="col-8">
            <div className="input-group mb-3">
              <span className="input-group-text" id="id">
                ID
              </span>
              <input
                type="text"
                className="form-control"
                name="id"
                value={newProduct.id}
                onChange={handleInputChange}
                aria-describedby="id"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="title">
                Title
              </span>
              <input
                type="text"
                className="form-control"
                name="title"
                value={newProduct.title}
                onChange={handleInputChange}
                aria-describedby="title"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="description">
                Description
              </span>
              <input
                type="text"
                className="form-control"
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
                aria-describedby="description"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="thumbnail">
                Thumbnail
              </span>
              <input
                type="text"
                className="form-control"
                name="thumbnail"
                value={newProduct.thumbnail}
                onChange={(e) => handleInputChange(e)}
                placeholder="https://www.example.com/image1.jpg"
                aria-describedby="thumbnail"
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="images">
                Images
              </span>
              <input
                type="text"
                className="form-control"
                name="images"
                value={newProduct.images.join(",")}
                onChange={handleImagesChange}
                placeholder="https://www.example.com/image1.jpg, https://www.example.com/image2.jpg"
                aria-describedby="images"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Ürünü Ekle
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
