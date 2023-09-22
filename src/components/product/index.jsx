import { Link } from "react-router-dom";
import Image from "../Image";
const ProductItem = ({ item }) => {
  console.log("item", item);
  return (
    <div className="product-item-container">
      <Link to={`/product/${item?.id}`} className="link">
      <div className="product-image">
      <Image src={item.image} />
      </div>
        <div className="description">
          <h1>{item.name}</h1>
          <h3>Price: {item.price}</h3>
          <p>{item.description}</p>
        </div>
      </Link>
    </div>
  );
};
export default ProductItem;
