import Link from "next/link"
import styles from '../styles/navbar.module.css'
import Image from "next/image"
import Head from "next/head";
import {useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [fix, setFix] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  }


  if (typeof window !== "undefined") {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 350) {
        setFix(true);
      } else {
        setFix(false);
      }
    });
  }

  return (
    <>
    <Head>
      <link rel="icon" href="/img/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    </Head>

      <div className={`${styles.navbar} ${fix ? styles.sticky : ''}`}>
        <div className={`${styles.logo} ${isOpen ? styles.burgerLogo : ''}`} >
          <Link href={'/'}>
            <Image className={styles.img} src='/img/icon.jpeg' alt="logo" width={80} height={80}>
            </Image>
          </Link>
        </div>

        <div className={`${styles.navItems} ${isOpen ? styles.show : ''}`}>
          <Link href='/' className={styles.navLink} onClick={handleMenuToggle}>
            Home
          </Link>
          
          <Link href='/contact' className={styles.navLink} onClick={handleMenuToggle}>
            Contact Us
          </Link>
        </div>
        <div className={`${styles.hamburgerBtn} ${isOpen ? styles.show : ''}`} onClick={handleMenuToggle}>
          <span className={`${styles.bar1} ${styles.bar}`}></span>
          <span className={`${styles.bar2} ${styles.bar}`}></span>
          <span className={`${styles.bar3} ${styles.bar}`}></span>
        </div>
      </div>
      <div className={`close ${isOpen ? styles.show : ''}`} id="notification"></div>
    </>
  )

}
