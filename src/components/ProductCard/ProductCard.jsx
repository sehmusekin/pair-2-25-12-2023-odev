import { Link } from "react-router-dom";
import axios from "axios";
import "./ProductCard.css";

function ProductCard(props) {
  const axiosDelete = async () => {
    try {
      await axios.delete(`https://dummyjson.com/products/${props.product.id}`);

      props.onDeleteSuccess(props.product.id);
    } catch (error) {
      console.error("Silme işlemi sırasında bir hata oluştu", error);
    }
  };

  return (
    <div className="card">
      <img
        src={props.product.thumbnail}
        className="card-img-top img-fluid custom-image-size"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text clamp">{props.product.description}</p>
        <Link to={"/products/" + props.product.id} className="btn btn-primary">
          Detail
        </Link>
        <button onClick={axiosDelete} className="btn btn-danger ms-3">
          Sil
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
