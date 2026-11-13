"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import brand from "@/config/brand";
import { models, shop } from "./links";
import styles from "./StoreChrome.module.css";

export default function StoreHeader() {
  const [menu, setMenu] = useState(false);
  const [products, setProducts] = useState(false);
  const root = useRef(null);
  const menuButton = useRef(null);
  const shopButton = useRef(null);
  const pathname = usePathname();

  function close() {
    setMenu(false);
    setProducts(false);
  }

  useEffect(() => {
    close();
  }, [pathname]);

  useEffect(() => {
    function dismiss(event) {
      if (!root.current?.contains(event.target)) close();
    }
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);

  return (
    <header ref={root} className={styles.header} onKeyDown={(event) => {
      if (event.key !== "Escape") return;
      if (products) {
        setProducts(false);
        shopButton.current?.focus();
      } else if (menu) {
        close();
        menuButton.current?.focus();
      }
    }}>
      <div className={styles.bar}>
        <button ref={menuButton} type="button" className={styles.mobileToggle} aria-label="Toggle menu"
          aria-expanded={menu} aria-controls="store-navigation"
          onClick={() => menu ? close() : setMenu(true)}>{menu ? "×" : "☰"}</button>
        <Link href="/" onClick={close} aria-label="Oxliv home">
          <Image className={styles.logo} src={brand.logo} alt="Oxliv" width={120} height={40} priority />
        </Link>
        <nav id="store-navigation" aria-label="Main navigation" className={styles.nav} data-open={menu}>
          <Link href="/" onClick={close}>Home</Link>
          <div className={styles.dropdown}>
            <button ref={shopButton} type="button" aria-expanded={products} aria-controls="store-models"
              onClick={() => setProducts(!products)}>Shop <span aria-hidden="true">⌄</span></button>
            <ul id="store-models" className={styles.models} hidden={!products}>
              {models.map(([label, href]) => (
                <li key={href}><Link href={href} onClick={close}>{label} Portable Oxygen Concentrator</Link></li>
              ))}
              <li><Link href={shop} onClick={close}>Shop All</Link></li>
            </ul>
          </div>
          <Link href="/about" onClick={close}>About Us</Link>
          <Link href="/faq" onClick={close}>FAQs</Link>
          <Link href="/contact" onClick={close}>Contact</Link>
          <Link href="/contact" onClick={close} className={styles.mobileSupport}>Talk to an expert</Link>
        </nav>
        <Link href="/contact" onClick={close} className={styles.expert}>Talk to an expert</Link>
        <Link href={shop} onClick={close} className={styles.mobileShop}>Shop</Link>
      </div>
    </header>
  );
}
