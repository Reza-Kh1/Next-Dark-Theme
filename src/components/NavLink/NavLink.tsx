"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
type NavLinkType = {
  name: string;
  url: string;
};
export default function NavLink({ name, url }: NavLinkType) {
  const path = usePathname();
  return (
    <Link
      href={url}
      className={`lg:p-3 p-2 text-sm px-3 lg:px-5 rounded-md text-gray-50 ${
        path === url ? "bg-dark-c" : ""
      }`}
    >
      {name}
    </Link>
  );
}
