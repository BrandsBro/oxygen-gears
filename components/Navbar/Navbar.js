"use client";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import brand from "@/config/brand";
import { useCart } from "@/lib/cartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
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

          {/* About Us Dropdown */}
          <div
            className={styles.dropdown}
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className={styles.dropdownTrigger}>
              About Us <span className={styles.arrow}>{aboutOpen ? "∧" : "∨"}</span>
            </button>
            {aboutOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/about" onClick={() => setAboutOpen(false)}>About Us</Link>
                <Link href="/user-manual" onClick={() => setAboutOpen(false)}>User Manual</Link>
                <Link href="/faq" onClick={() => setAboutOpen(false)}>FAQ's</Link>
              </div>
            )}
          </div>

          <Link href="/track">Track Order</Link>
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
          <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/user-manual" onClick={() => setMenuOpen(false)}>User Manual</Link>
          <Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ's</Link>
          <Link href="/track" onClick={() => setMenuOpen(false)}>Track Order</Link>
          <Link href={`/products/${brand.featuredProductSlug}`} onClick={() => setMenuOpen(false)} className={styles.orderBtn}>Order Now</Link>
        </div>
      )}
    </header>
  );
}
