import {Spinner} from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="flex justify-center h-screen my-auto">
      <Spinner label="Devshole..." labelColor="primary" />
    </div>
  );
}
