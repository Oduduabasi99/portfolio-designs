import "./product.css";

const Product = ({name,img, link}) => {
  return (
    <div className="pro">
      <div className="pro-browser">
        <div className="pro-circle"></div>
        <div className="pro-circle"></div>
        <div className="pro-circle"></div>
        <h2 className="pro-name">{name}</h2>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        
        <img src={img} alt="" className="pro-img" />
      </a>
      <div className="pro-details">
      
      </div>
    </div>
  );
};

export default Product;