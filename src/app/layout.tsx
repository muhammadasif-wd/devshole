import type {Metadata} from "next";

import "../styles/globals.css";
import React from "react";

import {Providers} from "./providers";
import MainNav from "./components/main-nav";
import MainFooter from "./components/main-footer";

export const metadata: Metadata = {
  title: "Devshole",
  description: "Devshole",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        {/* outfit font configure */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* oswald font configure */}
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <MainNav />
          <main className="min-h-screen mt-16">{children}</main>
          <MainFooter />
        </Providers>
      </body>
    </html>
  );
}
