"use client";
import { Button } from "../ui/button";

import Link from "next/link";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";

const MenuLinks = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="md:flex items-center gap-4 hidden">
        <Link href="/">
          <Button
            variant="link"
            className={`relative after:absolute hover:no-underline after:bottom-0 after:left-0 after:h-[5px] after:bg-blue-800 after:transition-all after:duration-300 ${
              pathname === "/"
                ? "text-blue-800 after:w-full"
                : "after:w-0 hover:after:w-full "
            }`}
          >
            Home
          </Button>
        </Link>
        <Link href="/about">
          <Button
            variant="link"
            className={`relative after:absolute hover:no-underline after:bottom-0 after:left-0 after:h-[5px] after:bg-blue-800 after:transition-all after:duration-300 ${
              pathname === "/about"
                ? "text-blue-700 after:w-full"
                : "after:w-0 hover:after:w-full "
            }`}
          >
            About
          </Button>
        </Link>
        <Link href="/events">
          <Button
            variant="link"
            className={`relative after:absolute hover:no-underline after:bottom-0 after:left-0 after:h-[5px] after:bg-blue-800 after:transition-all after:duration-300 ${
              pathname === "/events"
                ? "text-blue-700 after:w-full"
                : "after:w-0 hover:after:w-full "
            }`}
          >
            Events
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            variant="link"
            className={`relative after:absolute hover:no-underline after:bottom-0 after:left-0 after:h-[5px] after:bg-blue-800 after:transition-all after:duration-300 ${
              pathname === "/contact"
                ? "text-blue-700 after:w-full"
                : "after:w-0 hover:after:w-full "
            }`}
          >
            Contact
          </Button>
        </Link>

        <div className="rounded-full border p-2" onClick={() => {}}>
          <Search size={20} />
        </div>
      </div>
    </>
  );
};

export default MenuLinks;
