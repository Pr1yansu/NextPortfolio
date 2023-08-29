import React from "react";
import Pricing from "../Components/Pricing";

export const metadata = {
  title: "Pricing",
  description: "A portfolio of my work",
};

const page = () => {
  return (
    <main className="mt-20">
      <Pricing />
    </main>
  );
};

export default page;
