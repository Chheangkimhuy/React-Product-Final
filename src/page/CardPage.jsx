import { useContext } from "react";
import ProductContext from "../store/ProductProvider";

export default function ShoppingCart() {
  const { cart, addToCart, removeFromCart, removeCompletelyFromCart } = useContext(ProductContext);
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container py-5" style={{ marginTop: "150px" }}>
      <div className="row">
        {/* Cart Section */}
        <div className="col-12 col-lg-7">
          <h1 className="h3 mb-4 text-center">Shopping Cart</h1>
          <div className="bg-white p-4 rounded shadow-sm">
            {cart.length === 0 ? (
              <p className="text-center text-muted">Your cart is empty</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="d-flex align-items-center border-bottom py-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid"
                    style={{ maxWidth: "100px", maxHeight: "100px", objectFit: "cover" }}
                  />
                  <div className="ms-4 flex-grow-1">
                    <h3 className="h5">{item.name}</h3>
                    <p className="text-muted">${item.price} x {item.quantity}</p>
                    <p className="fw-bold text-dark">Total: ${item.price * item.quantity}</p>
                    <div className="d-flex align-items-center gap-2">
                      <button onClick={() => addToCart(item.id)} className="btn btn-success btn-sm">
                        +
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="btn btn-danger btn-sm"
                      >
                        -
                      </button>
                      <button
                        onClick={() => removeCompletelyFromCart(item.id)}
                        className="btn btn-outline-danger btn-sm ms-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Checkout Section */}
        <div className="col-12 col-lg-5 align-content-center my-5 " >
          <div className="bg-light p-4 rounded shadow-sm bg-secondary">
            <h2 className="h5 mb-4 text-center">Order Summary</h2>
            <hr />
            <div className="mb-5">
              <p className="d-flex justify-content-between font-semibold mt-4">
                <span>Subtotal:</span>
                <span>${totalAmount.toFixed(2)}</span>
              </p>
              <p className="d-flex justify-content-between text-gray-600">
                <span>Shipping:</span>
                <span>Free</span>
              </p>
            </div>
            
            <p className="d-flex justify-content-between fw-bold fs-5 my-4">
              <span>Total:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </p>
            <hr />
            <button className="btn btn-outline-primary w-100 mt-3">CheckOut</button>
            <select name="" id="" className="form-control d-flex justify-content-betweent align-items-center my-4 shadow-none border border-1 text-center">
              <option value="aba">ABA</option>
              <option value="acleda">ACLEDA</option>
              <option value="barkong">BARKONG</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
