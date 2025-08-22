import React, { useEffect, useState } from "react";
import styles from "@/styles/product-list.module.css";
import { Product } from "@/interfaces/product";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";
import { FaBeer, FaTrash } from "react-icons/fa";
export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [category, setCategory] = useState<string>("all");
    const { addToCart, removeFromCart, removeParticularCart, cart } = useCart();
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data: Product[] = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const filteredProducts =
        category === "all"
            ? products
            : products.filter((p) => p.category === category);

    return (
        <div className="container mt-4">
            <h2>Products</h2>
            <div className="mb-3">
                <button  className={`btn btn-outline-primary me-2 mt-2 ${category === "all" ? "active" : ""}`} onClick={() => setCategory("all")}>
                    All
                </button>
                <button className={`btn btn-outline-primary me-2 mt-2 ${category === "electronics" ? "active" : ""}`} onClick={() => setCategory("electronics")}>
                    Electronics
                </button>
                <button className={`btn btn-outline-primary me-2 mt-2 ${category === "jewelery" ? "active" : ""}`} onClick={() => setCategory("jewelery")}>
                    Jewelry
                </button>
                <button className={`btn btn-outline-primary me-2 mt-2 ${category === "men's clothing" ? "active" : ""}`} onClick={() => setCategory("men's clothing")}>
                    Men's Clothing
                </button>
                <button className={`btn btn-outline-primary me-2 mt-2 ${category === "women's clothing" ? "active" : ""}`} onClick={() => setCategory("women's clothing")}>
                    Women's Clothing
                </button>
            </div>

            <div className="row">
                {filteredProducts.map((p) => {
                    const cartItem = cart.find((item) => item.id === p.id);
                    return (
                        <div className="col-md-3 mb-3" key={p.id}>
                            <div className="card p-3 shadow-sm h-100">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className={styles.productImage}
                                />
                                <div className="card-body">
                                    <h5 className={styles.productTitle}>{p.title}</h5>
                                    <p>{p.category}</p>
                                    <p><strong>${p.price}</strong></p>
                                    {cartItem ? (<div className="d-flex align-items-center justify-content-between gap-3">
                                        <div className="d-flex justify-content-between align-items-center border w-100 h-auto">
                                            <button className="btn btn-outline-primary btn-sm" onClick={() => { removeFromCart(p.id); toast.success(`${p.title} Removed from cart`); }}>
                                                -
                                            </button>
                                            <span>{cartItem.quantity}</span>
                                            <button className="btn btn-outline-primary btn-sm" onClick={() => { addToCart(p); toast.success(`${p.title} Added to cart`); }}>
                                                +
                                            </button>
                                        </div>
                                        <div role="button" onClick={() => { removeFromCart(p.id); toast.success(`${p.title} Removed from cart`); }}><FaTrash className="text-danger" size={24} /></div>
                                    </div>)
                                        :
                                        (
                                       <button className="btn btn-primary w-100 btn-sm" onClick={() => { addToCart(p); toast.success(`${p.title} Added to cart`); }}>Add to Cart</button>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    );
}
