import React from "react";
import ProjectComponent from "../Components/Projects";
export const metadata = {
  title: "Projects",
  description: "A portfolio of my work",
};

const page = () => {
  return (
    <section className="flex items-center min-h-screen">
      <ProjectComponent />
    </section>
  );
};

export default page;
