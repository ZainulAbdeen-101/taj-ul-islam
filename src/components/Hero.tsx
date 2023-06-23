"use client";
import React, { useRef } from "react";

import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS, Parent, bg } from "./Motion";

export default function Hero() {
  const targetref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetref,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);
  return (
    <>
      <motion.div style={{ opacity }} ref={targetref} className="relative  ">
        <motion.div variants={bg} initial={"hidden"} animate={"show"}>
          <Image
            className=" z-[-1] "
            src={"/bg1.jpg"}
            alt={""}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </motion.div>
        <motion.div
          initial={"hidden"}
          variants={Parent}
          whileInView={"show"}
          className="flex h-screen flex-col justify-center items-center  "
          style={{ scale }}
        >
          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-[#663DE4] text-lg"
          >
            From the realm of Developers
          </motion.p>
          <motion.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="font-font text-[150px] text-[#eaff01] leading-none"
          >
            Taj Khan
          </motion.h1>
          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-[#fbfaf5]"
          >
            JAM-Stack Developer | Full Stack Web Developer{" "}
          </motion.p>
        </motion.div>
      </motion.div>
      {/* <div className='border-none mt-10'>
        <Image className='' src={'/hero.png'} alt=''  width={450} height={450} />

    </div> */}
    </>
  );
}
