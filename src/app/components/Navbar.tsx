// src/components/Navbar/Navbar.tsx

"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Current isOpen value (before toggle):", isOpen);
    setIsOpen((current) => {
      console.log("New isOpen value (after toggle):", !current);
      return !current;
    });
  };

  return (
    <nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navbar-container bg-transparent ${isOpen ? "active" : ""}`}>
        <Link href="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
