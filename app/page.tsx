"use client";
import Image from 'next/image';
import { BentoGridDemo } from './components/bento/bento';
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
  const titletext = "Welcome to My Art World".toUpperCase().split(" ");

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
          <h1 ref={title} className="text-4xl max-w-xl font-black mb-4 butovo">
            {titletext.map((word, i) => (
            <span key={i} className={`relative overflow-hidden inline-block ${i === 4 ? '' : 'mr-4'}`}>
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
          <p className="text-xs text-gray-700 mb-6 max-w-xl mx-auto font-mono">
            Discover hand-drawn illustrations that blend creativity, emotion, and storytelling.
          </p>
          <a
            href="/works"
            className="bg-transparent text-stone-600 font-medium butovo px-6 py-3 hover:bg-[#AE2D29] border border-black hover:text-white hover:-translate-y-1 transition duration-200 shadow-[6px_6px_0_0#000]"
          >
            Explore My Work
          </a>
        </section>
        <div id="bento"></div>
        <BentoGridDemo />
        <div className='flex lg:flex-row flex-col-reverse justify-between items-center lg:items-end p-4  pt-96 lg:py-20 mb-24 lg:mb-16 max-w-7xl mx-auto'>
          <div style={{ fontWeight: '300' }} className='flex justify-center pl-4 lg:px-4 font-mono text-left border-l h-1/2 border-black text-sm'>
            Hi, I’m [Your Name], a passionate freelance illustrator and drawer based in [Your City].
            <br></br> With [X years] of experience, I specialize in creating unique, hand-drawn artwork that tells a story.
            <br></br> When I’m not drawing, you can find me exploring nature for inspiration or experimenting with new artistic techniques.
            Let’s collaborate and create something beautiful together!
            Contact me today to discuss your next project.
          </div>
          <Image src='/Painting1/herself.jpg' alt='Image 1' className='w-1/2 md:w-[60%] h-auto object-cover md:max-w-[60%] border border-black shadow-[6px_6px_0_0#000] mb-8 lg:mb-0' layout='responsive' width={300} height={200} style={{ filter: "invert(0)" }}/>
        </div>
    </div>
  );
}