"use client";
import NavBar from "../components/navbar/navbar";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";


export default function About() {
  const title1 = useRef(null);
  const isInView = useInView(title1, { once: true, margin: '-10%' });
  const titleWords = "About me".split(" ");
  const textWords = "Born in Vicenza (Italy) on the 29th of December 2002 with Serbian origins, currently living in-between Milan and Vicenza. Visual artist preferentially painter. Currently a third year student at the Academy of Fine Arts of Brera (MI), BA in Painting.".split(" ");
  
  const titleWords2 = "EXHIBITS AND INTERVIEWS".split(" ");
  

  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: i * 0.075,
      },
    }),
  };

  const animation2 = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1],
        delay: i * 0.015,
      },
    }),
  };

  const animation3 = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1],
        delay: i * 0.075,
      },
    }),
  };

  return (
    <div>
      <NavBar />
    <div className='p-8 pt-40 lg:pt-60 lg:px-40 mb-32'>
      <h1 ref={title1} className="uppercase text-[2rem] w-full flex justify-start lg:justify-center text-[#AE2D29] butovo mb-4" style={{ fontWeight: 600 }}>
        {titleWords.map((word, i) => (
            <span key={i} className="relative overflow-hidden mr-4 inline-block">
              <motion.span
                className="inline-block"
                custom={i}
                variants={animation}
                initial="initial"
                animate={isInView ? "enter" : ""}
              >
                {word}
              </motion.span>
            </span>
          ))}
      </h1>
      <p className="font-light border-l pl-4 border-black">
        {textWords.map((word, i) => (
            <span key={i} className="relative overflow-hidden mr-1 inline-block font-mono">
              <motion.span
                className="inline-block"
                custom={i}
                variants={animation2}
                initial="initial"
                animate={isInView ? "enter" : ""}
              >
                {word}
              </motion.span>
            </span>
          ))}
      </p>
      <h1 className="text-[#AE2D29] text-[1.8rem] py-4 butovo"  style={{ fontWeight: 600 }}>
        {titleWords2.map((word, i) => (
            <span key={i} className="relative overflow-hidden mr-4 inline-block">
              <motion.span
                className="inline-block"
                custom={i}
                variants={animation}
                initial="initial"
                animate={isInView ? "enter" : ""}
              >
                {word}
              </motion.span>
            </span>
          ))}
      </h1>
      <motion.p
        style={{ fontWeight: 700 }}
        className="border-l pl-4 border-black"
        initial="initial"
        animate={isInView ? "enter" : ""}
        variants={animation3}
        custom={0}
      >
        {"26 Novembar-3 December 2023 (Locate di Triulzi, Mi)".split(" ").map((word, i) => (
          <span key={i} className="relative overflow-hidden mr-1 inline-block">
            <motion.span
              className="inline-block"
              custom={i}
              variants={animation3}
              initial="initial"
              animate={isInView ? "enter" : ""}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.p>
      <motion.p
        className="border-l pl-4 border-black"
        initial="initial"
        animate={isInView ? "enter" : ""}
        variants={animation3}
        custom={1}
      >
        {"Collective ”Com’eri vestita?”, work pres. “ROTTURA”".split(" ").map((word, i) => (
          <span key={i} className="relative overflow-hidden mr-1 inline-block font-mono">
            <motion.span
              className="inline-block"
              custom={i}
              variants={animation3}
              initial="initial"
              animate={isInView ? "enter" : ""}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.p>
      <motion.p
        className="pb-2 border-l pl-4 border-black"
        initial="initial"
        animate={isInView ? "enter" : ""}
        variants={animation3}
        custom={2}
      >
        {"11 December 2023".split(" ").map((word, i) => (
          <span key={i} className="relative overflow-hidden mr-1 inline-block font-mono">
            <motion.span
              className="inline-block"
              custom={i}
              variants={animation3}
              initial="initial"
              animate={isInView ? "enter" : ""}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.p>
      <motion.p
        style={{ fontWeight: 700 }}
        className="border-l pl-4 border-black"
        initial="initial"
        animate={isInView ? "enter" : ""}
        variants={animation3}
        custom={3}
      >
        {"Interview with VenticentoArtMagazine (2023)".split(" ").map((word, i) => (
          <span key={i} className="relative overflow-hidden mr-1 inline-block">
            <motion.span
              className="inline-block"
              custom={i}
              variants={animation3}
              initial="initial"
              animate={isInView ? "enter" : ""}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.p>
      <motion.p
        className="pb-2 border-l pl-4 border-black"
        initial="initial"
        animate={isInView ? "enter" : ""}
        variants={animation3}
        custom={4}
      >
        {"(link of the interview)".split(" ").map((word, i) => (
          <span key={i} className="relative overflow-hidden mr-1 inline-block">
            <motion.span
              className="inline-block"
              custom={i}
              variants={animation3}
              initial="initial"
              animate={isInView ? "enter" : ""}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.p>
      <motion.p
        style={{ fontWeight: 700 }}
        className="border-l pl-4 border-black"
        initial="initial"
        animate={isInView ? "enter" : ""}
        variants={animation3}
        custom={5}
      >
        {"January -May 2024 (Silk Road International Art Center in Langfang, China)".split(" ").map((word, i) => (
          <span key={i} className="relative overflow-hidden mr-1 inline-block">
            <motion.span
              className="inline-block"
              custom={i}
              variants={animation3}
              initial="initial"
              animate={isInView ? "enter" : ""}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.p>
      <motion.p
        className="border-l pl-4 border-black"
        initial="initial"
        animate={isInView ? "enter" : ""}
        variants={animation3}
        custom={6}
      >
        {"Collective “Sunday Fun” with Lulumeanstudio, work pres.".split(" ").map((word, i) => (
          <span key={i} className="relative overflow-hidden mr-1 inline-block font-mono">
            <motion.span
              className="inline-block"
              custom={i}
              variants={animation3}
              initial="initial"
              animate={isInView ? "enter" : ""}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.p>
      <motion.p
        className="border-l pl-4 border-black"
        initial="initial"
        animate={isInView ? "enter" : ""}
        variants={animation3}
        custom={7}
      >
        {"Artists book “Well-put together".split(" ").map((word, i) => (
          <span key={i} className="relative overflow-hidden mr-1 inline-block font-mono font-extralight">
            <motion.span
              className="inline-block"
              custom={i}
              variants={animation3}
              initial="initial"
              animate={isInView ? "enter" : ""}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.p>
      <motion.p
        className="pb-2 border-l pl-4 border-black"
        initial="initial"
        animate={isInView ? "enter" : ""}
        variants={animation3}
        custom={8}
      >
        {"on my bathroom floor” and Artists book “I fell between my bed and my drawer”".split(" ").map((word, i) => (
          <span key={i} className="relative overflow-hidden mr-1 inline-block font-mono">
            <motion.span
              className="inline-block"
              custom={i}
              variants={animation3}
              initial="initial"
              animate={isInView ? "enter" : ""}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.p>
    </div>
    </div>
  );
}