import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pro-list">
      <div className="pro-list-texts">
        <h1 className="pro-list-title">Projects</h1>
        <hr />
        <p className="pro-list-desc">
          Few of my recent projects!!! Check them out...
        </p>
      </div>
      <div className="pro-list-list">
          {products.map((item) =>(
              <Product key={item.id} name={item.name} img={item.img} link={item.link} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
