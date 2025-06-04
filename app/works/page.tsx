"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Image from "next/image"
import NavBar from "../components/navbar/navbar";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories: [string, string[][]][] = [
  ['Paintings',
    [
      [
        'Painting 1',
        '/image1.png',
      ],
      [
        'Painting 2',
        '/image2.png',
      ],
      [
        'Painting 3',
        '/Painting3/image1.png',
      ],
      [
        'Painting 4',
        '/Painting4/image1.png',
      ],
      [
        'Painting 5',
        '/Painting5/image1.png',
      ],
      [
        'Painting 6',
        '/Painting6/image1.png',
      ],
      [
        'Painting 7',
        '/Painting7/image1.png',
      ],
      [
        'Painting 8',
        '/Painting8/image1.png',
      ],
    ]
  ],
  ['Poetry',
    [
     [
        'Poetry 1',
        '/Poetry1/image1.png',
      ],
      [
        'Poetry 2',
        '/Poetry2/image1.png',
      ],
      [
        'Poetry 3',
        '/Poetry3/image1.png',
      ],
      [
        'Poetry 4',
        '/Poetry4/image1.png',
      ],
      [
        'Poetry 5',
        '/Poetry5/image1.png',
      ],
      [
        'Poetry 6',
        '/Poetry6/image1.png',
      ],
      [
        'Poetry 7',
        '/Poetry7/image1.png',
      ],
    ]
  ],
  ['Photography',
    [
      [
        'Photography 1', 
        '/Photography1/image1.png',
      ],
      [
        'Photography 2',
        '/Photography2/image1.png', 
      ],
      [
        'Photography 3',
        '/Photography3/image1.png',
      ],
    ]
  ],
  ['Videos',
    [
      [
        'Video 1',
        '/Video1/image1.png',
      ],
      [
        'Video 2',
        '/Video2/image1.png',
      ],
      [
        'Video 3',
        '/Video3/image1.png',
      ],
      [
        'Video 4',
        '/Video4/image1.png',
      ],
      [
        'Video 5',
        '/Video5/image1.png',
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

  return (
    <motion.li
      className="font-bold p-1 text-xl"
      key={idx}
      ref={ref}
      custom={idx}
      variants={animation}
      initial="initial"
      animate={isInView ? "enter" : ""}
    >
      <HoverCard>
        <HoverCardTrigger asChild>
          <p className="butovo cursor-pointer">
            {item[0]}
            <sup className="text-[#AE2D29] font-thin">&nbsp;{idx + 1}</sup>
          </p>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between">
            <Image
              src={item[1]}
              alt={item[0]}
              layout="fill"
              className="object-fill"
            />
          </div>
        </HoverCardContent>
      </HoverCard>
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
            <div key={catIdx} className="flex lg:justify-center justify-start p-2">
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

