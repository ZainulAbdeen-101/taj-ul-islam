"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_UP_ANIMATION_VARIANTS,
  Parent,
} from "./Motion";

export default function Contact() {
  const targetref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetref,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0.1, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.8], [1, 0.5]);
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <>
      <motion.div
        ref={targetref}
        style={{ opacity, scale }}
        className="mt-32 h-screen "
      >
        <motion.div className="flex justify-around">
          <motion.div
            className="mt-20 max-w-[550px] tracking-wider leading-none"
            variants={Parent}
            initial="hidden"
            whileInView={"show"}
          >
            <motion.h1
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              variants={variants1}
              className="font-font  text-[70px] text-[#eaff01]"
            >
              Interested in collaborating with me?
            </motion.h1>

            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="mt-3 font-font text-xl tracking-wider"
            >
              <Link
                className="hover:text-[#fbfaf5] text-[#663DE4]    transition  duration-200"
                href={""}
              >
                LinkedIn
              </Link>
            </motion.p>
            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="mt-3 font-font text-xl tracking-wider"
            >
              <Link
                className="hover:text-[#fbfaf5] text-[#663DE4]   transition  duration-200"
                href={""}
              >
                Facebook
              </Link>
            </motion.p>
            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="mt-3 font-font text-xl tracking-wider"
            >
              <Link
                className="hover:text-[#fbfaf5] text-[#663DE4]   transition  duration-200"
                href={""}
              >
                Github
              </Link>
            </motion.p>
            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="mt-3 font-font text-xl tracking-wider"
            >
              <Link
                className="hover:text-[#fbfaf5] text-[#663DE4]    transition  duration-200"
                href={""}
              >
                Instagram
              </Link>
            </motion.p>

            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="mt-3 font-font text-xl tracking-wider"
            >
              <Link
                className="hover:text-[#fbfaf5] text-[#663DE4] transition ease-in-out duration-300"
                href={""}
              >
                bbadshah691@gmail.com
              </Link>
            </motion.p>
          </motion.div>
          <motion.div className="absolute right-0 mt-16 bg-[#eaff01] w-[550px] h-[500px] z-[-10]"></motion.div>
          <motion.div
            variants={Parent}
            initial="hidden"
            whileInView={"show"}
            className="bg-[#663de4] mt-32 px-10 max-w-[550px]  text-[#fafbf5] text-[50px] font-font text-justify"
          >
            <motion.p
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className=""
            >
              Finding Me !! <br />
              Have an exciting project you need help with? Send me an email or
              contact me via instant message!
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
