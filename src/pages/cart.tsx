import { useCart } from "@/context/CartContext";
import styles from "@/styles/cart.module.css";
import Link from "next/link";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
export default function Cart() {
    const { cart, addToCart, removeParticularCart, removeFromCart } = useCart();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4>Shopping cart</h4>
                    <small className="text-muted">
                        You have {cart.length} items in your cart
                    </small>
                </div>
            </div>

            <div className="list-group">
                {cart.map((item) => {

                    return (
                        <div
                            key={item.id}
                            className="list-group-item d-flex justify-content-between align-items-center mb-3 shadow-sm rounded"
                        >
                            <div className="d-flex align-items-center">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`me-3 ${styles.cartImage}`}
                                />
                                <div>
                                    <h6 className="mb-1">{item.title}</h6>
                                    <small className="text-muted">{item.category}</small>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <span className="fw-bold">${(item.price * item.quantity).toFixed(2)}</span>
                                <div className="d-flex justify-content-between align-items-center border w-100 h-auto">
                                    <button className="btn btn-outline-primary btn-sm" onClick={() => { removeParticularCart(item.id); toast.success(`${item.title} Removed from cart`); }}>
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button className="btn btn-outline-primary btn-sm" onClick={() => { addToCart(item); toast.success(`${item.title} Added to cart`); }}>
                                        +
                                    </button>
                                </div>

                                <FaTrash role="button" className="text-danger" onClick={() => removeFromCart(item.id)} size={26} />
                            </div>
                        </div>)
                })}
            </div>

           
                <div className="d-flex justify-content-between align-items-center">
                <Link
                    href="/product-list"
                    className="btn btn-outline-primary d-flex align-items-center"
                >
                    <FaArrowLeft className="me-2" />
                    <span>Continue Shopping</span>
                </Link>
                 {cart.length > 0 ? (
                    <div className="d-flex align-items-center gap-3">
                        <h5 className="mb-0">
                            Total: <span className="fw-bold">${total.toFixed(2)}</span>
                        </h5>
                        <button className="btn btn-primary"> Checkout</button>
                    </div>
                          ) : null}
                </div>
      



        </div>



    );
}
