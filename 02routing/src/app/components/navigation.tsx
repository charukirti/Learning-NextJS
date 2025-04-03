"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();
  return (
    <nav>
      <Link
        href="/"
        className={pathname === "/" ? "font-bold mr-4" : "mr-4 text-blue-500"}
      >
        Home
      </Link>
      <Link href="/about" className={pathname === "/about" ? "font-bold mr-4" : "mr-4 text-blue-500"}>
        About
      </Link>
      <Link href="/products/macbook" className={pathname.startsWith("/products/mackbook") ? "font-bold mr-4" : "mr-4 text-blue-500"}>
        Macbook
      </Link>
    </nav>
  );
}
