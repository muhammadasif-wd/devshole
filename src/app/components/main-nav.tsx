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
        className="fixed w-full bg-primary/10 shadow-dark/20 dark:shadow-light/20 shadow backdrop-blur container"
        maxWidth="full"
      >
        <NavbarBrand as={Link} href={"/"}>
          <p className="font-bold text-inherit dark:text-light text-dark">DEVSHOLE</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
          <NavbarItem>
            <Link
              className={`${pathname === "/pricing" ? "font-bold text-primary dark:text-foreground" : "dark:text-light text-dark"} `}
              href="/pricing"
            >
              Pricing
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`${pathname === "/contact" ? "font-bold text-primary dark:text-foreground" : "dark:text-light text-dark"} `}
              href="/contact"
            >
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link
              className={`${pathname === "/login" ? "font-bold text-primary dark:text-foreground" : "dark:text-light text-dark"} `}
              href="/login"
            >
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              className={`${pathname === "/sign-up" ? "font-bold text-primary dark:text-foreground" : "dark:text-light text-dark"} `}
              color="secondary"
              href="/sign-up"
              variant="flat"
            >
              Sign Up
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
