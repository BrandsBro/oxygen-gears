"use client";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import brand from "@/config/brand";
import { useCart } from "@/lib/cartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <div className={styles.bannerInner}>{brand.freeShippingText}</div>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/">Home</Link>
          <Link href="/collection/all">All Products</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        <div className={styles.logo}>
          <Link href="/">
            <Image src={brand.logo} alt={brand.name} width={260} height={60} className={styles.logoImg} />
          </Link>
        </div>

        <div className={styles.navRight}>
          <Link href={`/products/${brand.featuredProductSlug}`} className={styles.orderBtn}>Order Now</Link>
          <Link href="/cart" className={styles.cartIcon}>
            🛒
            {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
          </Link>
        </div>

        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/collection/all" onClick={() => setMenuOpen(false)}>All Products</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <Link href={`/products/${brand.featuredProductSlug}`} onClick={() => setMenuOpen(false)} className={styles.orderBtn}>Order Now</Link>
        </div>
      )}
    </header>
  );
}
