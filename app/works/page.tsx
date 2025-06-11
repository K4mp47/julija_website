"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Image from "next/image"
import NavBar from "../components/navbar/navbar";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SpringModal  from "../components/modal/modal";

const categories: [string, string[][]][] = [
  ['Paintings',
    [
      [
        'Painting 1',
        '/image1.png',
        'Primo quadro appartenete alla serie di opere che esplorano la luce e l\'ombra, creando un contrasto drammatico.\
        nell\'immagine si può notare l\'uso di colori vivaci e pennellate audaci che danno vita alla scena.\
        La composizione è bilanciata, con un punto focale che attira l\'occhio dello spettatore.\
        Questo dipinto rappresenta un momento di introspezione e contemplazione, invitando lo spettatore a riflettere sulla bellezza della vita.\
        La luce gioca un ruolo fondamentale, creando profondità e dimensione, mentre le ombre aggiungono un senso di mistero e complessità.\
        ',
      ],
      [
        'Painting 2',
        '/image2.png',
        'Secondo quadro della serie, caratterizzato da un uso audace del colore e della forma.',
      ],
      [
        'Painting 3',
        '/fruits.png',
      ],
      [
        'Painting 4',
        '/fruits.png',
      ],
      [
        'Painting 5',
        '/image1.png',
      ],
      [
        'Painting 6',
        '/hero3.png',
      ],
      [
        'Painting 7',
        '/fruits5.png',
      ],
      [
        'Painting 8',
        '/hero2.png',
      ],
    ]
  ],
  ['Poetry',
    [
     [
        'Poetry 1',
        '/image1.png',
      ],
      [
        'Poetry 2',
        '/hero9-.png',
      ],
      [
        'Poetry 3',
        '/hero8.png',
      ],
      [
        'Poetry 4',
        '/hero3.png',
      ],
      [
        'Poetry 5',
        '/fruits4.png',
      ],
      [
        'Poetry 6',
        '/image1.png',
      ],
      [
        'Poetry 7',
        '/image1.png',
      ],
    ]
  ],
  ['Photography',
    [
      [
        'Photography 1',
        '/image1.png',
      ],
      [
        'Photography 2',
        '/image1.png',
      ],
      [
        'Photography 3',
        '/image1.png',
      ],
    ]
  ],
  ['Videos',
    [
      [
        'Video 1',
        '/ascii.webm',
      ],
      [
        'Video 2',
        '/ascii.webm',
      ],
      [
        'Video 3',
        '/ascii.webm',
      ],
      [
        'Video 4',
        '/ascii.webm',
      ],
      [
        'Video 5',
        '/ascii.webm',
      ],
    ]
  ]
]
type AnimatedListItemProps = {
  item: string[];
  idx: number;
  animation: import("framer-motion").Variants;
};

function AnimatedListItem({ item, idx, animation }: AnimatedListItemProps) {
  const ref = useRef<HTMLLIElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.li
      className="font-bold text-xl"
      key={idx}
      ref={ref}
      custom={idx}
      variants={animation}
      initial="initial"
      animate={isInView ? "enter" : ""}
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <p className="butovo cursor-pointer border-l pl-4 border-black" onClick={() => setIsOpen(true)}>
            {item[0]}
            <sup className="text-[#AE2D29] font-thin">&nbsp;{idx + 1}</sup>
          </p>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 h-80">
          <div className="w-full h-full min-h-[320px] min-w-[320px]">
            { item[1].endsWith('.webm') ? (
              <video
                src={item[1]}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-fill"
                style={{ filter: "invert(0)" }}
              />
            ) : (
              <Image
                src={item[1]}
                alt={item[0]}
                fill
                className="object-cover"
              />
            )}
          </div>
        </HoverCardContent>
      </HoverCard>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} src={item[1]} title={item[0]} descr={item[2]} />
    </motion.li>
  );
}

export default function Works() {
  // Animate each item when in view
  // If you want all to animate at once, use a single ref; for per-item, use an array
  const animation = {
    initial: { y: "100%", opacity: 0 },
    enter: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
        delay: i * 0.07,
      },
    }),
  };

  return (
    <div>
      <NavBar />
      <div className="min-h-max pt-40">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-6 lg:px-28 pb-28">
          {categories.map(([category, items], catIdx) => (
            <div key={catIdx} className="flex lg:justify-center justify-start pl-8">
              <div>
                <div className="font-light">{category}/<sup className="text-[#AE2D29]">&nbsp;0</sup></div>
                <ul className="pl-8 lg:pl-20">
                  {items.map((item, idx) => (
                    <AnimatedListItem
                      key={idx}
                      item={item}
                      idx={idx}
                      animation={animation}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

