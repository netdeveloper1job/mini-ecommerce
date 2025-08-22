import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
            <a className="navbar-brand fw-bold" href="#">
                MyShop
            </a>
            <div className="ms-auto d-flex">

                <Link href="/product-list" className="nav-link me-3">
                    Products
                </Link>

                <Link href="/cart" className="nav-link">
                    Cart
                </Link>

            </div>
        </nav>
    );
}
