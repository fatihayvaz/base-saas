"use client";

import React from "react";
import Button from "@/components/common/Button";

const HomeClient: React.FC = () => {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <Button onClick={() => alert("Button clicked!")}>Click me!</Button>
    </div>
  );
};

export default HomeClient;
