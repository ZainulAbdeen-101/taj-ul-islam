"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FADE_UP_ANIMATION_VARIANTS,
  Parent,
  container,
  image,
  item,
} from "./Motion";

export default function About() {
  const targetref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetref,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0.3, 0.9], [1, 0]);
  const x = useTransform(scrollYProgress, [0.3, 0.8], [0, -1000]);

  return (
    <>
      <motion.div
        ref={targetref}
        style={{ opacity, x }}
        className=" h-screen flex justify-between bg-[#eaff01]"
      >
        <motion.div style={{ x }} className="max-w-[550px] ml-10">
          <motion.h1
            className="font-font text-[70px] text-[#663DE4]  mt-5"
            variants={container}
            initial="hidden"
            whileInView="show"
          >
            {"About Me".split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={item}
                style={{ display: "inline-block", marginRight: "5px" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            variants={Parent}
            initial="hidden"
            whileInView={"show"}
            className="text-[#fbfaf5] p-8 font-light rounded-lg bg-[#001019] text-justify flex flex-col gap-5 mt-10"
          >
            <motion.p
              className="text-[#eaff01] text-lg font-semibold"
              variants={FADE_UP_ANIMATION_VARIANTS}
            >
              Hello, i'm Taj Khan!
            </motion.p>
            <motion.p variants={FADE_UP_ANIMATION_VARIANTS}>
              i'm a self-taught full stack web developer based in Karachi
              Pakistan.I can develop responsive websites from scratch and raise
              them into modern unique user-friendly web Experiences.
            </motion.p>
            <motion.p variants={FADE_UP_ANIMATION_VARIANTS}>
              Transforming my creativity and knowledge into dynamic responsive
              websites has been my passion for over a year.
            </motion.p>
            <motion.p variants={FADE_UP_ANIMATION_VARIANTS}>
              i have been helping various clients to estabish thier presense
              online. i always strive to learn about the newest technologies and
              frameworks to make web applications with latest edge-cutting
              technologies.
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          variants={image}
          initial="hidden"
          whileInView={"show"}
          className=""
        >
          <Image src={"/about.png"} alt="" width={600} height={550} />
        </motion.div>
      </motion.div>
    </>
  );
}
