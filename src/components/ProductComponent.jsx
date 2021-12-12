import React from "react";
import { useSelector } from "react-redux";

// Functional Component
const ProductComponent = () => {
  // useSelector allows you to access states inside of the store globally
  const products = useSelector((state) => state.productReducer.products);
  const renderList = products.map((el) => {
    const { id, title, price, category, image } = el;
    return (
      <div className="four column wide">
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <div className="content">
                <div className="header"> {title} </div>
                <div className="price"> ${price} </div>
                <div className="category"> {category} </div>
                <img src={image} alt="prod img" height={200} width={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  // Destructuring the state , you can view it in ../redux/
  // const { id, title, category } = products[0];
  return <>{renderList}</>;
};

export default ProductComponent;
