"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_IN_ANIMATION_VARIANTS,
  FADE_UP_ANIMATION_VARIANTS,
  Parent,
  bg1,
  bg2,
} from "./Motion";
import {
  AiFillHtml5,
  DiCss3,
  FaReact,
  IoLogoJavascript,
  SiContentful,
  SiFirebase,
  SiGraphql,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
} from "./Icon";

export default function Expertise() {
  const targetref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetref,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0.3, 0.9], [1, 0]);
  const x = useTransform(scrollYProgress, [0.3, 0.8], [0, -1000]);
  const words = "My-Expertise";
  const letters = words.split("");
  return (
    <>
      <motion.div
        ref={targetref}
        style={{ opacity, x }}
        variants={bg1}
        initial="hidden"
        whileInView="show"
        className="h-screen bg-[#fbfaf5] "
      >
        <motion.div>
          <motion.h1 className="font-font text-[70px] text-center text-[#663DE4] ">
            {letters.map((letter, i) => (
              <motion.span
                variants={FADE_IN_ANIMATION_VARIANTS}
                key={i}
                custom={i}
                initial="initial"
                whileInView="animate"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={bg2}
          className="bg-[#eaff01]  py-[66px] rounded-md     mx-10 flex justify-around"
        >
          <motion.div
            variants={Parent}
            initial="hidden"
            whileInView="show"
            className="shadow-xl  max-w-[550px] rounded-xl p-8 bg-[#663DE4]"
          >
            <motion.h3
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="font-font text-[#eaff01]  text-[50px]"
            >
              Front-End
            </motion.h3>
            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className=" text-justify text-[#fbfaf5] "
            >
              I possess the expertise to create highly interactive and
              responsive user interfaces. With a solid understanding of modern
              web development principles, excel in translating design concepts
              into functional components, ensuring a seamless user experience.
              my ability to collaborate effectively with designers, backend
              developers, and stakeholders allows me to contribute to the full
              development lifecycle.
            </motion.p>
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex gap-10 mt-10"
            >
              <AiFillHtml5 fill="#eaff01" size={30} />
              <DiCss3 fill="#eaff01" size={30} />
              <IoLogoJavascript fill="#eaff01" size={30} />
              <SiTypescript fill="#eaff01" size={30} />
              <FaReact fill="#eaff01" size={30} />
              <SiTailwindcss fill="#eaff01" size={30} />
            </motion.div>
          </motion.div>
          <motion.div
            variants={Parent}
            initial="hidden"
            whileInView="show"
            className="shadow-xl max-w-[550px] p-8  rounded-xl  bg-[#663DE4]"
          >
            <motion.h3
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="font-font text-[#eaff01] text-[50px]"
            >
              Back-End
            </motion.h3>
            <motion.p
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="text-[#eaff01] text-justify  "
            >
              As a proficient backend developer specializing in serverless
              databases and headless-CMS.I possess the expertise to architect
              and manage robust backend systems that power modern web
              applications. My deep understanding of serverless technologies
              allows me to leverage the scalability, cost-efficiency, and ease
              of maintenance offered by cloud-based database solutions.
            </motion.p>

            <motion.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="flex gap-10 mt-10"
            >
              <SiNextdotjs fill="#eaff01" size={30} />
              <SiPhp fill="#eaff01" size={30} />
              <SiPostgresql fill="#eaff01" size={30} />
              <SiFirebase fill="#eaff01" size={30} />
              <SiMysql fill="#eaff01" size={30} />
              <SiGraphql fill="#eaff01" size={30} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
