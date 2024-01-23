"use client";

import {Button} from "@nextui-org/react";
import {useEffect} from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  useEffect(() => {}, [error]);

  return (
    <div className="text-center flex items-center justify-center h-[80vh] my-auto md:w-[32rem] w-[20rem] mx-auto">
      <div>
        <h1 className="md:text-8xl text-6xl font-bold my-5">Oops !</h1>
        <h3 className="lg:text-2xl md:text-xl text-base font-bold my-5 text-danger">
          Error - {error.message || "Something went wrong!"}
        </h3>
        <p className="md:text-lg text-tiny font-medium">
          We apologize for the inconvenience. Our team has been notified, and we are working to
          resolve the issue as quickly as possible. Please try again later.
        </p>
        <Button
          className="uppercase px-5 py-3 font-bold rounded my-3"
          color="primary"
          onClick={() => reset()}
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
