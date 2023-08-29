"use client";
import React from "react";
import { nunito } from "../layout";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO",
    img: "/assets/avatar1.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "CEO",
    img: "/assets/avatar2.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 3,
    name: "John Doe",
    title: "CEO",
    img: "/assets/avatar3.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 4,
    name: "Jane Doe",
    title: "CEO",
    img: "/assets/avatar4.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 5,
    name: "Jane Doe",
    title: "CEO",
    img: "/assets/avatar4.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 6,
    name: "Jane Doe",
    title: "CEO",
    img: "/assets/avatar4.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];
const Testimonials = () => {
  return (
    <section className="md:w-90% w-full max-w-lg px-4 md:max-w-[1400px] flex py-8 lg:min-h-[70vh] mx-auto max-xl:flex-wrap relative  max-xl:justify-center items-center">
      <Swiper
        breakpoints={{
          512: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        navigation={testimonialData.length > 3}
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Navigation]}
        className="mySwiper !py-20"
      >
        {testimonialData.map((testimonial) => {
          return (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                className="w-full h-[350px] shadow-dropShadow rounded-xl border border-slate-300 flex flex-col justify-center items-center relative gap-4"
                whileHover={{ cursor: "grab" }}
                whileTap={{ cursor: "grabbing" }}
              >
                <div className="absolute top-0 -translate-y-1/2">
                  <Image
                    src={testimonial.img}
                    alt="avatar.jpg"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="w-28 h-28 rounded-full object-cover object-top"
                  />
                </div>
                <div className="text-center">
                  <h4
                    className={`${nunito.className} lg:text-2xl text-xl py-1 text-secondary`}
                  >
                    {testimonial.name}
                  </h4>
                  <p className="text-lg text-description py-1">
                    {testimonial.title}
                  </p>
                  <p className="text-base text-description px-4 py-2">
                    {testimonial.review}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
