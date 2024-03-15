import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://github.com/serhatsel1" target="_blank">
        Serhat SEL
      </Link>
    </footer>
  );
}

export default Footer ;
