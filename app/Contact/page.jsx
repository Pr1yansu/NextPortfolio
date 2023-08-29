import React from "react";
import ContactComponent from "../Components/Contact";
import Image from "next/image";
export const metadata = {
  title: "Contact",
  description: "A portfolio of my work",
};
const page = () => {
  return (
    <section className="flex justify-center w-full flex-col items-center py-16">
      <Image
        src={"/assets/Contact.png"}
        height={400}
        width={400}
        alt="Contact.png"
      />
      <ContactComponent />
    </section>
  );
};

export default page;
