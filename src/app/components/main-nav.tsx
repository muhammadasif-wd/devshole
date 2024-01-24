"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {usePathname} from "next/navigation";

import {ThemeSwitcher} from "./theme-switcher";

export default function MainNav() {
  const pathname = usePathname();

  return (
    <div>
      <Navbar
        shouldHideOnScroll
        className="fixed w-full bg-primary/5 shadow-dark/10 dark:shadow-light/10 shadow backdrop-blur"
        maxWidth="2xl"
      >
        <NavbarBrand as={Link} href={"/"}>
          <p className="font-bold text-inherit dark:text-light text-dark">DEVSHOLE</p>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-4" justify="center">
          <NavbarItem>
            <Link
              className={`${pathname === "/" ? "font-bold text-primary dark:text-foreground" : "dark:text-light text-dark"} `}
              href="/"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${pathname === "/about" ? "font-bold text-primary dark:text-foreground" : "dark:text-light text-dark"} `}
              href="/about"
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${pathname === "/blogs" ? "font-bold text-primary dark:text-foreground" : "dark:text-light text-dark"} `}
              href="/blogs"
            >
              Blogs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${pathname === "/products" ? "font-bold text-primary dark:text-foreground" : "dark:text-light text-dark"} `}
              href="/products"
            >
              Products
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${pathname === "/services" ? "font-bold text-primary dark:text-foreground" : "dark:text-light text-dark"} `}
              href="/services"
            >
              Services
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link
              className={`${pathname === "/pricing" ? "font-bold text-primary dark:text-foreground" : "dark:text-light text-dark"} `}
              href="/pricing"
            >
              Pricing
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              className={`${pathname === "/contact" ? "font-bold text-primary dark:text-foreground" : "dark:text-light text-dark"} `}
              color="secondary"
              href="/contact"
              variant="flat"
            >
              Contact
            </Button>
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
