import React, { useEffect, useState } from "react";
import styles from "@/styles/product-list.module.css";
import { Product } from "@/interfaces/product";
import { useCart } from "@/context/CartContext";
export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [category, setCategory] = useState<string>("all");
    const { addToCart } = useCart();
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
                <button className="btn btn-outline-primary me-2 mt-2" onClick={() => setCategory("all")}>
                    All
                </button>
                <button className="btn btn-outline-primary me-2 mt-2" onClick={() => setCategory("electronics")}>
                    Electronics
                </button>
                <button className="btn btn-outline-primary me-2 mt-2" onClick={() => setCategory("jewelery")}>
                    Jewelry
                </button>
                <button className="btn btn-outline-primary me-2 mt-2" onClick={() => setCategory("men's clothing")}>
                    Men's Clothing
                </button>
                <button className="btn btn-outline-primary mt-2" onClick={() => setCategory("women's clothing")}>
                    Women's Clothing
                </button>
            </div>

            <div className="row">
                {filteredProducts.map((p) => (
                    <div className="col-md-4 mb-3" key={p.id}>
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
                                <button className="btn btn-primary w-100"  onClick={() => addToCart(p)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
