import "bootstrap/dist/css/bootstrap.min.css"; 
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }: AppProps) {
   useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <CartProvider>
      <Header/>
      <Component {...pageProps} />
       <Toaster position="bottom-right" toastOptions={{ duration: 1000 }} />
    </CartProvider>
  );
}
