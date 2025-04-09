"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

// Constants
import { menuLinksList } from "@/app/data/menu-links-list";
import Link from "next/link";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent-light dark:text-accent-dark" />
      </SheetTrigger>
      <SheetTitle />
      <SheetContent className="flex flex-col">
        {/* Logo */}
        {/* <div>test</div> */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-primary dark:text-white">
              Anthika
              <span className="text-accent-light dark:text-accent-dark">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {menuLinksList.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path === pathname &&
                "text-accent-light dark:text-accent-dark border-b-2 border-accent-light dark:border-accent-dark"
              } text-xl capitalize hover:text-accent-light dark:hover:text-accent-dark transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
