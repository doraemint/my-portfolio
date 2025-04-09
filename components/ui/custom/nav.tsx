"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Constants
import { menuLinksList } from "@/app/data/menu-links-list";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {menuLinksList.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            link.path === pathname &&
            "text-accent-light dark:text-accent-dark border-b-2 border-accent-light dark:border-accent-dark"
          } hover:text-accent-light dark:hover:text-accent-dark capitalize font-medium transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
export default Nav;
