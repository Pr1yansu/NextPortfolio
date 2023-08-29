"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";
import { nunito } from "../layout";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import axios from "axios";
import { Skeleton } from "@mui/material";

const Categories = [
  {
    id: 1,
    name: "UI/UX",
  },
  {
    id: 2,
    name: "Node",
  },
  {
    id: 3,
    name: "React",
  },
  {
    id: 4,
    name: "Java",
  },
];
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const fetchProjects = async () => {
    try {
      const { data } = await axios.get("/api/projects");
      if (!data.projects) {
        setLoading(true);
      }
      setLoading(false);
      setProjects(data.projects);
      return data.projects;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") {
      return project;
    } else {
      return project.tags.includes(activeCategory);
    }
  });

  return (
    <>
      {loading ? (
        <div className="gap-4 w-full min-h-[50vh] flex justify-center items-center flex-wrap">
          <Skeleton variant="rectangular" width={400} height={200} />
          <Skeleton variant="rectangular" width={400} height={200} />
          <Skeleton variant="rectangular" width={400} height={200} />
        </div>
      ) : (
        <section className="md:w-90% w-full max-w-lg px-4 md:max-w-[1800px] flex mt-10 my-8 min-h-[70vh] py-8 mx-auto max-xl:flex-wrap items-center">
          <div className="h-full w-full">
            <h4
              className={`w-full my-4 text-center text-secondary text-xl ${nunito.className}`}
            >
              My Projects
            </h4>
            {/* Tabs */}
            <div className="flex gap-4 flex-wrap space-x-4 justify-center my-2 mb-8 text-white text-base">
              <span
                className={
                  activeCategory === "All"
                    ? "px-4 py-2 bg-primary shadow-lg shadow-zinc-800 rounded-full cursor-pointer duration-300"
                    : "px-4 py-2 bg-transparent shadow-lg !shadow-purple-500 rounded-full cursor-pointer duration-300 text-primary"
                }
                onClick={() => {
                  setActiveCategory("All");
                }}
              >
                ALL
              </span>
              {Categories.map((category) => {
                return (
                  <span
                    key={category.id}
                    className={
                      activeCategory === category.name
                        ? "px-4 py-2 bg-primary shadow-lg shadow-zinc-800 rounded-full cursor-pointer duration-300"
                        : "px-4 py-2 bg-transparent shadow-lg !shadow-purple-500 cursor-pointer duration-300 rounded-full text-primary"
                    }
                    onClick={() => {
                      setActiveCategory(category.name);
                    }}
                  >
                    {category.name}
                  </span>
                );
              })}
            </div>
            {/* Tabs end */}
            <AnimatePresence>
              <div className="w-full">
                <Swiper
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  }}
                  navigation={filteredProjects.length > 3}
                  slidesPerView={1}
                  spaceBetween={30}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[FreeMode, Navigation]}
                  className="mySwiper"
                >
                  {filteredProjects.map((project, i) => {
                    return (
                      <SwiperSlide key={project._id}>
                        <Link
                          href={{
                            pathname: `/Projects/${project._id}/`,
                            query: project,
                          }}
                        >
                          <motion.div
                            className="w-full h-full overflow-hidden rounded-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.5,
                              delay: i / 10,
                            }}
                            exit={{ opacity: 0 }}
                          >
                            <div className="w-full h-72 overflow-hidden">
                              <Image
                                loading="lazy"
                                src={project.image}
                                height={0}
                                width={0}
                                sizes="100vw"
                                className="w-full h-auto hover:-translate-y-[82%] transform transition-all duration-[9s] ease-in-out cursor-pointer"
                                alt="Project1.jpg"
                              />
                            </div>
                          </motion.div>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </AnimatePresence>
          </div>
        </section>
      )}
    </>
  );
};

export default Projects;
