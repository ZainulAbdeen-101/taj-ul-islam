"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { Parent, image, image1, work } from "./Motion";

export default function Work() {
  const targetref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetref,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0.1, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 1.3]);

  const text1 = "Work";

  return (
    <>
      <motion.div ref={targetref} style={{ opacity, scale }} className="  ">
        <div className="flex space-x-1 justify-center">
          {text1.split("").map((char, i) => (
            <motion.h1
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={work}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="font-font text-center text-[70px] text-[#eaff01]"
            >
              {char}
            </motion.h1>
          ))}
        </div>
        <motion.div
          variants={Parent}
          initial={"hidden"}
          whileInView={"show"}
          className="mx-20 mt-10"
        >
          <motion.div
            variants={image}
            className="relative    group max-w-[500px]"
          >
            <Image
              className="group-hover:opacity-30 shadow-2xl shadow-[#eaff01] transition-all group-hover:scale-110 group-hover:-rotate-3 duration-300 absolute rounded-xl inset-0"
              src={"/Dine-Market.png"}
              alt=""
              width={500}
              height={0}
            />

            <div className="pt-[150px]">
              <div
                className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                duration-300
                                group-hover:translate-y-0"
              >
                <div className="p-2">
                  <Link
                    href={"#"}
                    className="font-font text-[40px] text-[#eaff01] "
                  >
                    Dine Market
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={image1}
            className="relative  ml-[600px]  bg-gray-900 group max-w-[500px]"
          >
            <Image
              className="group-hover:opacity-30 shadow-2xl shadow-[#663DE4]  group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 absolute rounded-xl inset-0"
              src={"/Codevista-Solutions.png"}
              alt=""
              width={500}
              height={0}
            />

            <div className="pt-[150px]">
              <div
                className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                duration-300
                                group-hover:translate-y-0"
              >
                <div className="p-2">
                  <Link
                    href={"#"}
                    className="font-font text-[40px] text-[#eaff01] "
                  >
                    Codevista Solutions
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={image}
            className="relative  group max-w-[500px]"
          >
            <Image
              className="group-hover:opacity-30 shadow-2xl shadow-[#fbfaf5] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 absolute rounded-xl inset-0"
              src={"/TechSpark.png"}
              alt=""
              width={500}
              height={0}
            />

            <div className="pt-[150px]">
              <div
                className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                duration-300
                                group-hover:translate-y-0"
              >
                <div className="p-2">
                  <Link
                    href={"#"}
                    className="font-font text-[40px] text-[#eaff01] "
                  >
                    Tech Spark
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={image1}
            className="relative  ml-[600px]   group max-w-[500px]"
          >
            <Image
              className="group-hover:opacity-30 shadow-2xl shadow-[#eaff01]  group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 absolute rounded-xl inset-0"
              src={"/portfolio template.png"}
              alt=""
              width={500}
              height={0}
            />

            <div className="pt-[150px]">
              <div
                className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                duration-300
                                group-hover:translate-y-0"
              >
                <div className="p-2">
                  <Link
                    href={"#"}
                    className="font-font text-[40px] text-[#eaff01] "
                  >
                    Anime Pros
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
