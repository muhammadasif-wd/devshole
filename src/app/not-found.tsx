"use client";
import {Button} from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center flex items-center justify-center h-[80vh] my-auto md:w-[32rem] w-[20rem] mx-auto">
      <div>
        <h1 className="md:text-8xl text-6xl font-bold my-5">Oops !</h1>
        <h3 className="lg:text-2xl md:text-xl text-base font-bold my-5 text-dark">
          404 | Page Not Found
        </h3>
        <p className="md:text-lg text-tiny font-medium">
          The requested page could not be found. Please check the URL for errors or navigate to the
          homepage. If the issue persists, contact support.
        </p>
        <Button
          as={Link}
          className="uppercase px-5 py-3 font-bold rounded my-3"
          color="primary"
          href="/"
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  );
}
