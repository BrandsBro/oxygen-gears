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
  const closeTimer = useRef(null);
  const menuButton = useRef(null);
  const shopButton = useRef(null);
  const pathname = usePathname();
  const supportPhone = `tel:${brand.phone.replace(/[^+\d]/g, "")}`;

  function close() {
    clearTimeout(closeTimer.current);
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

  function enterProducts(event) {
    if (event.pointerType !== "mouse" || !window.matchMedia("(min-width: 861px)").matches) return;
    clearTimeout(closeTimer.current);
    setProducts(true);
  }

  function leaveProducts(event) {
    if (event.pointerType !== "mouse" || !window.matchMedia("(min-width: 861px)").matches) return;
    closeTimer.current = setTimeout(() => {
      if (!root.current?.querySelector("#store-models")?.contains(document.activeElement)) setProducts(false);
    }, 160);
  }

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <>
      <div className={styles.announcement}>
        <span className={styles.announcementItem}><span aria-hidden="true">✅</span> Trusted by 150k+ Customers</span>
        <Link className={styles.announcementItem} href="/shipping-policy">Free Shipping</Link>
        <Link className={styles.announcementItem} href="/contact">Phone &amp; Email Support Available</Link>
      </div>
    <header ref={root} className={styles.header} onKeyDown={(event) => {
      if (event.key !== "Escape") return;
      if (products) {
        clearTimeout(closeTimer.current);
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
          <div className={styles.dropdown} onPointerEnter={enterProducts} onPointerLeave={leaveProducts}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget) && !event.currentTarget.matches(":hover")) setProducts(false);
            }}>
            <Link href={shop} onClick={close} className={styles.shopLink}>Shop</Link>
            <button ref={shopButton} type="button" aria-label="Show Shop products" aria-expanded={products} aria-controls="store-models"
              onClick={() => setProducts((open) => !open)}>
              <span aria-hidden="true">⌄</span>
            </button>
            <div id="store-models" className={styles.models} data-open={products} inert={!products}>
              <ul className={styles.productCards}>
                {models.map(([label, href, image]) => (
                  <li key={href}>
                    <Link href={href} onClick={close} aria-current={pathname === href ? "page" : undefined}>
                      <Image src={image} alt="" width={320} height={320} sizes="(max-width: 860px) 42vw, 19vw" />
                      <span>{label.replace("/min", "")} Portable Oxygen Concentrator</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link href="/about" onClick={close}>About Us</Link>
          <Link href="/faq" onClick={close}>FAQs</Link>
          <Link href="/contact" onClick={close}>Contact</Link>
          <a href={supportPhone} onClick={close} className={styles.mobileSupport}>Talk to an expert</a>
        </nav>
        <a href={supportPhone} onClick={close} className={styles.expert}>Talk to an expert</a>
        <Link href={shop} onClick={close} className={styles.mobileShop}>Shop</Link>
      </div>
    </header>
    </>
  );
}
