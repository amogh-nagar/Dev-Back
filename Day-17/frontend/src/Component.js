import { useLocation, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Component.css";

const Component = () => {
  const [product, setproduct] = useState({
    name: "React from facebook",
    price: 10,
    productBy: "facebook",
  });
  
  const location = useLocation();
  console.log(location);
  const history = useHistory();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    if (query.get("success")) {
      console.log("Order successfully placed");
      // succesfully-places-order/
    } else if (query.get("canceled")) {
      console.log("Order is not successfully placed");
    }
  }, []);

  const changehandler = (e) => {
    setproduct((prev) => {
      return {
        ...prev,
        price: e.target.value,
      };
    });
  };
  const clickhanlder = () => {
    history.push("/hello");
  };
  return (
    <div>
      <form action="http://localhost:8080/payment" method="POST">
        <button className="btn-large blue">Buy react {product.price} </button>
        <input
          className="input"
          type="text"
          name="price"
          value={product.price}
          onChange={changehandler}
        />
      </form>
      <button onClick={clickhanlder}>Click</button>
    </div>
  );
};

export default Component;
