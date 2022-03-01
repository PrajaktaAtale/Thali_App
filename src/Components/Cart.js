import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem } from "../redux/slice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Cart = () => {
  const thali = useSelector((state) => state.counter.thali);
  const click = () => {
    if (thali.length < 2) {
      Swal.fire({
        icon: "error",

        title: "Oops...",

        text: "thali should have atlest two items",
      });
    } else {
      navigate("/CheckOut");
    }
  };
  console.log(thali);
  const despatch = useDispatch();
  const Remove = (id) => {
    despatch(RemoveItem(id));
  };
  const navigate = useNavigate();
  var sum = 0;
  for (const item of thali) {
    sum = sum + item.totalPrice;
  }
  return (
    <div className="container  mx-3">
      <h1 className="text-center text-danger my-4 food">Your Food</h1>
      <div className="row">
        {thali.map((ele, i) => (
          <div className="col-3 my-3">
            <div className="cart" key={i}>
              <img
                src={ele.image}
                className="card-img-top"
                alt="..."
                width="100px"
                height="200px"
              />
              <div className="cart-body">
                <h5 className="card-title">{ele.name}</h5>
                <p className="cart-text">Quantity: {ele.quantity}</p>
                <p className="pice">
                  Price: <span className="dollar"> $</span>
                  <span className="span">{ele.price}</span>
                </p>
                <p className="pice">
                  TotalPrice: <span className="dollar"> $</span>{" "}
                  <span className="span">{ele.totalPrice}</span>
                </p>
                <button
                  onClick={() => Remove(i)}
                  className="btn btn-primary remove"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
        <h3 className="text-center text-success my-5">
          <span className="grand">Your Grand total price: </span>{" "}
          <span className="dollar">$</span>
          {sum}
        </h3>
        <button className="btn btn-success order-now" onClick={click}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
