import Link from "next/link";
import React from "react";
import { useCart } from "@/context/CartContext";
import styles  from "@/styles/header.module.css";
export default function Header() {
  const { cart } = useCart();

  const uniqueProducts = cart.length;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white shadow-sm px-4">
      <a className="navbar-brand fw-bold text-white" href="#">
        Mini Ecommerce Site
      </a>
      <div className="ms-auto d-flex align-items-center fw-bold">
        <Link href="/product-list" className="nav-link me-3">
          Products
        </Link>

        <Link href="/cart" className="nav-link position-relative fw-bold ">
          Cart
          {uniqueProducts > 0 && (
            <span className={styles.notificationIcon}>{uniqueProducts}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}
