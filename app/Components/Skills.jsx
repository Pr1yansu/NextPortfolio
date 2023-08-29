"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Progress } from "@material-tailwind/react";
import { nunito } from "../layout";
import { Skeleton, Tooltip } from "@mui/material";
import { useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { data } = await axios.get("/api/skills");
        if (!data.skills) {
          setLoading(true);
        }
        setSkills(data.skills);
        setLoading(false);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchSkills();
  }, [loading]);
  return (
    <>
      {loading === false ? (
        <div
          className="md:grid-cols-2 w-full grid gap-y-6 gap-4 grid-cols-1"
          ref={ref}
        >
          {skills.map((skill, i) => (
            <div key={i}>
              <h4
                className={`text-base text-heading ${nunito.className} text-secondary`}
              >
                {skill.name}
              </h4>
              <p className="text-description text-sm mb-1">
                {skill.description}
              </p>
              <Tooltip title={`${skill.percentage}%`} placement="top-end">
                <Progress
                  value={isInView ? skill.percentage : 0}
                  size="lg"
                  className="border border-gray-900/10 bg-gray-900/5 p-1 px-2 shadow-inner shadow-zinc-300 progress w-full cursor-pointer duration-300"
                />
              </Tooltip>
            </div>
          ))}
        </div>
      ) : (
        <Skeleton width={200} />
      )}
    </>
  );
};

export default Skills;
