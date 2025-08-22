import { useCart } from "@/context/CartContext";
import styles from "@/styles/cart.module.css";
export default function Cart() {
    const { cart, removeFromCart } = useCart();

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
                            <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeFromCart(item.id)}
                            >
                                🗑
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
