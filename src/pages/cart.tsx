import { useCart } from "@/context/CartContext";
import styles from "@/styles/cart.module.css";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
export default function Cart() {
    const { cart, removeFromCart } = useCart();
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
                {cart.map((item) => (
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
                            <span className="text-muted">x{item.quantity}</span>
                            <span className="fw-bold">${item.price * item.quantity}</span>
                            <FaTrash role="button" className="text-danger" onClick={() => removeFromCart(item.id)} size={18} />
                        </div>
                    </div>
                ))}
            </div>

            {cart.length > 0 ? (
                <div className="d-flex justify-content-between align-items-center">
                    <Link href="/product-list" className="btn btn-outline-primary">
                        Continue Shopping
                    </Link>

                    <div className="d-flex align-items-center gap-3">
                        <h5 className="mb-0">
                            Total: <span className="fw-bold">${total.toFixed(2)}</span>
                        </h5>
                        <button className="btn btn-primary">Checkout</button>
                    </div>
                </div>
            ) : null}



        </div>



    );
}
