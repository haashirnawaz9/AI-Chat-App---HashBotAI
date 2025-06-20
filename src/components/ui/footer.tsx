"use client"
import Link from 'next/link';

function Footer() {
  return (
    <footer className="flex flex-row justify-center items-center text-center h-[60px] bg-gradient-to-r from-blue-300 to-indigo-400">
      <h1 className="font-normal text-sm">Copyright © 2024 HashBot AI | All Rights Reserved</h1>
      <Link href="https://www.instagram.com/haashir_nawaz_/">
      </Link>
    </footer>
  );
}

export default Footer;
