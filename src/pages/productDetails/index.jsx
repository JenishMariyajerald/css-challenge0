import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import productListData from "../../utils/productList.json";
import Header from "../../components/header";
import Footer from "../../components/footer";

const ProductDetailsPage = () => {
  const { productID } = useParams();
  console.log("productID", productID);

  const product = productListData.products.find((item) => {
    return item.id == productID;
  });

  return (
    <div className="product-details-container">
      <Header />
      <div className="details-container">
        <div className="image-container">
          <div>
            <img className="image-container-img" src={product?.image} alt="" />
          </div>
        </div>

        <div className="description-container">
          <h1>{product?.name}</h1>
          <h4>{`${product?.description}`}</h4>
          <h2>{`Price: $ ${product?.price}`}</h2>
          <h4>{`Rating: ${product?.rating}`}</h4>
          <h4>{`Only ${product?.qty} Left`}</h4>
          <button className="cart">Add to Cart</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
