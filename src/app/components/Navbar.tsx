// src/components/Navbar/Navbar.js
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
