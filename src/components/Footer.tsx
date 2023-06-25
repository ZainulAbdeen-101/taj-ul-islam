"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FADE_DOWN_ANIMATION_VARIANTS, Parent } from "./Motion";

export default function Footer() {
  return (
    <>
      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        initial="hidden"
        whileInView={"show"}
        className="h-screen flex justify-center items-center"
      >
        
        <motion.h1
          variants={Parent}
          initial="hidden"
          whileInView={"show"}
          className="font-font text-[40px] max-w-xl tracking-wide  text-[#eaff01] text-center"
        >
          Loosely designed in{" "}
          <motion.span
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-[#663DE4] "
          >
            Figma
          </motion.span>{" "}
          and coded in{" "}
          <motion.span
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-[#663DE4]"
          >
            Visual Studio
          </motion.span>{" "}
          Code by yours truly. Built with{" "}
          <motion.span
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-[#663DE4]"
          >
            Next.js
          </motion.span>{" "}
          and{" "}
          <motion.span
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-[#663DE4]"
          >
            Tailwind
          </motion.span>{" "}
          deployed with{" "}
          <motion.span
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-[#663DE4]"
          >
            Vercel.
          </motion.span>
          
        </motion.h1>
      </motion.div>
    </>
  );
}
