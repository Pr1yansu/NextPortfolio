import React from "react";
import ServicesComponent from "../Components/Services";

export const metadata = {
  title: "Services",
  description: "A portfolio of my work",
};

const Services = () => {
  return (
    <main className="py-16">
      <ServicesComponent />
    </main>
  );
};

export default Services;
