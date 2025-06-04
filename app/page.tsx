import Image from 'next/image';
import { BentoGridDemo } from './components/bento/bento';
import NavBar from './components/navbar/navbar';


// const images = [
//   '/image1.png',
//   '/image2.png',
//   '/image3.png',
//   '/image4.png',
// ]

export default function Home() {

  // const num = Math.floor(Math.random() * images.length)

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
        <div className='mt-20'></div>
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