import React from "react";
import ImageComponent from "./ImageComponent";
import ContentSection from "./ContentSection.jsx";

const Banner = () => {
  return (
    <section className="banner">
      <div className=" w-90% mx-auto flex flex-wrap items-center min-h-screen pt-20 py-4 max-w-[1800px]">
        <ContentSection />
        <ImageComponent />
      </div>
    </section>
  );
};

export default Banner;
