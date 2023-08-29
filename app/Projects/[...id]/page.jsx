import { nunito } from "@/app/layout";
import { Chip, Tooltip } from "@mui/material";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Project",
  description: "A portfolio of my work",
};

const page = async ({ params, searchParams }) => {
  const data = await searchParams;
  return (
    <section className="w-90% mx-auto pt-20 flex space-x-8 max-md:flex-col">
      <div className="md:w-1/2 px-4">
        <Image
          src={data.image}
          alt={`${data.name}.png`}
          height={400}
          width={400}
          className="rounded-xl md:ms-auto max-md:mx-auto"
        />
      </div>
      <div className="md:w-1/2 py-8 px-4">
        <h1
          className={`${nunito.className} md:text-3xl text-xl font-bold text-primary`}
        >
          {data.name}
        </h1>
        <p className="md:text-lg text-base py-4 text-description">
          {data.description}
        </p>
        <div className="flex flex-wrap gap-4 py-8">
          {typeof data.tags === "string" ? (
            <Tooltip title={`${data.tags} Project`} placement="top">
              <Chip
                label={data.tags}
                size="medium"
                sx={{
                  backgroundColor: "#fd346e",
                  color: "white",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              />
            </Tooltip>
          ) : (
            data.tags.map((tag, i) => (
              <Tooltip key={i} title={`${tag} Project`} placement="top">
                <Chip
                  label={tag}
                  size="medium"
                  sx={{
                    backgroundColor: "#fd346e",
                    color: "white",
                    fontSize: "12px",
                    cursor: "pointer",
                  }}
                />
              </Tooltip>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default page;
