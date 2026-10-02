"use client";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import brand from "@/config/brand";

const shopLinks = [
  { label: "All Products", href: "/collection/all" },
  { label: "Portable Concentrators", href: "/collection/portable-oxygen-concentrators" },
  { label: "Accessories", href: "/collection/accessories" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo — left */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={120}
              height={40}
              className={styles.logoImg}
              priority
            />
          </Link>
        </div>

        {/* Links — center */}
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <div className={styles.shopMenu}>
            <button className={styles.shopToggle}>
              Shop <span className={styles.chevron}>▾</span>
            </button>
            <div className={styles.dropdown}>
              {shopLinks.map((l) => (
                <Link key={l.href} href={l.href} className={styles.dropItem}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/faq">FAQs</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Buy Now — right */}
        <div className={styles.right}>
          <Link href="/collection/all" className={styles.buyBtn}>Buy Now</Link>
        </div>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          {shopLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</Link>
          ))}
          <Link href="/faq" onClick={() => setMenuOpen(false)}>FAQs</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/collection/all" onClick={() => setMenuOpen(false)} className={styles.buyBtn}>
            Buy Now
          </Link>
        </div>
      )}
    </header>
  );
}
