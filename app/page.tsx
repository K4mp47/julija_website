"use client";
import Image from 'next/image';
import { BentoGridDemo } from './components/bento/bento';
import NavBar from './components/navbar/navbar';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';


// const images = [
//   '/image1.png',
//   '/image2.png',
//   '/image3.png',
//   '/image4.png',
// ]

export default function Home() {
  
  const title = useRef(null);
  const isInView = useInView(title, { once: true, margin: '-10%' });
  // const num = Math.floor(Math.random() * images.length)
  const titletext = "Welcome to My Art World".split(" ");

  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: 0,
      transition: {
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
        delay: i * 0.20,
      },
    }),
  };

  return (
    <div className=''>
      <NavBar />
        {/* <div className="flex justify-center mt-[10rem]">
          <Image
            src={images[num]}
            alt="Random artwork"
            width={800}
            height={300}
            className="object-cover"
          />
        </div> */}
        {/* <div className='mt-20'></div> */}
        <section className="w-full h-screen flex flex-col justify-center items-center text-center py-24 px-6">
          <h1 ref={title} className="text-4xl font-bold mb-4 butovo text">
            {titletext.map((word, i) => (
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
          <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
            Discover hand-drawn illustrations that blend creativity, emotion, and storytelling.
          </p>
          <a
            href="/works"
            className="bg-transparent text-stone-600 font-medium butovo px-6 py-3 hover:bg-[#AE2D29] hover:text-white transition duration-200"
          >
            Explore My Work
          </a>
        </section>
        <div id="bento"></div>
        <BentoGridDemo />
        <div className='flex lg:flex-row flex-col-reverse justify-between p-8 lg:p-20 mb-24 lg:mb-16'>
          <div style={{ fontWeight: '300' }} className='flex text-center justify-center items-center lg:p-16'>
            Hi, I’m [Your Name], a passionate freelance illustrator and drawer based in [Your City].
            <br></br> With [X years] of experience, I specialize in creating unique, hand-drawn artwork that tells a story.
            <br></br> When I’m not drawing, you can find me exploring nature for inspiration or experimenting with new artistic techniques.
            Let’s collaborate and create something beautiful together!
            Contact me today to discuss your next project.
          </div>
          <Image src='/me.png' alt='Image 1' className='w-1/2 h-auto object-cover scale-75' layout='responsive' width={240} height={240} />
        </div>
    </div>
  );
}