import Image from 'next/image';

const images = [
  '/image1.png',
  '/image2.png',
  '/image.png',
  '/image4.png',
]

export default function Home() {
  return (
    <div>
        <div className="hidden lg:grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-6 lg:px-28">
          {images.map((src, index) => (
            <div key={index} className={`h-80 w-full ${
              index === 0 || index === 3 ? 'lg:col-span-3' : 'lg:col-span-2'
            } overflow-hidden group relative hover:scale-[101%] transition-transform duration-300 ease-in-out`}>
              <Image src={src} alt={`Image ${index + 1}`} className='object-cover' layout='fill' />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <span className="text-[2rem] text-black" style={{ fontWeight: 200 }}>{['Painting', 'Poetry', 'Photography', 'Videos'][index]}</span>
              </div>
            </div>
          ))}
        </div>
        <div className='lg:hidden w-full'>
          {images.map((src, index) => (
              <div key={index} className={`h-80 w-full overflow-hidden relative`}>
                <Image src={src} alt={`Image ${index + 1}`} className='object-cover' layout='fill' />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[2rem] text-black" style={{ fontWeight: 200 }}>{['Painting', 'Poetry', 'Photography', 'Videos'][index]}</span>
                </div>
              </div>
            ))}
        </div>
        <div className='hidden lg:flex justify-between p-8 lg:p-20'>
          <div style={{ fontWeight: '300' }} className='flex text-center justify-center items-center p-16'>
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