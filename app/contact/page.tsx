"use client";
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import NavBar from '../components/navbar/navbar';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Contact() {
    const title = useRef(null);
    const isInView = useInView(title, { once: true, margin: '-10%' });
    // const num = Math.floor(Math.random() * images.length)
    const titletext = "Contacts".split("");
    const subtext = "get in touch!".split(" "); 
  
    const animation = {
      initial: { y: "100%" },
      enter: (i: number) => ({
        y: 0,
        transition: {
          duration: 0.20,
          ease: [0.33, 1, 0.68, 1],
          delay: i * 0.1,
        },
      }),
    };  

    const animation2 = {
      initial: { y: "100%" },
      enter: (i: number) => ({
        y: 0,
        transition: {
          duration: 0.30,
          ease: [0.33, 1, 0.68, 1],
          delay: i * 0.20,
        },
      }),
    };  

    return (
      <div>
        <NavBar />
      <div className='p-8 lg:p-40 flex flex-col max-w-lg md:mx-auto justify-start lg:justify-center lg:text-center'>
        <h1 ref={title} className="uppercase text-left text-4xl text-[#AE2D29] font-semibold butovo">
          {titletext.map((char, i) => (
            <span key={i} className={`overflow-hidden inline-block`}>
              <motion.span
                className="inline-block"
                custom={i}
                variants={animation}
                initial="initial"
                animate={isInView ? "enter" : ""}
              >
                {char}
              </motion.span>
            </span>
          ))}
        </h1>
        <p className="font-medium text-left">
          {subtext.map((word, i) => (
            <span key={i} className={`relative overflow-hidden mr-1 inline-block font-mono ${i === 0 ? ' border-l pl-4 border-black' : ''}`}>
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
        <div className="relative flex justify-start mt-8">
          <FaInstagram className="text-[#AE2D29] text-2xl mr-2" />
          <span style={{ fontWeight: 400 }}>instagram@username</span>
        </div>
        
        <div className="relative flex justify-start mt-4">
          <AiOutlineMail className="text-[#AE2D29] text-2xl mr-2" />
          <span style={{ fontWeight: 400 }}>email@username</span>
        </div>
      </div>
      </div>
    );
  }