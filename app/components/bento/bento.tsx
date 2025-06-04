import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-7xl mx-auto border">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-3" : ""}
        />
      ))}
    </BentoGrid>
  );
}

// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );

const MyImage1 = () => (
  <div className="flex flex-1 w-full h-full min-h-[12rem] bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative">
    <Image src="/image1.png" alt="Sphere" fill className="object-cover" />
  </div>
);

const MyImage2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[12rem] bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative">
    <Image src="/image2.png" alt="Sphere" fill className="object-cover" />
  </div>
);

const MyImage3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[12rem] bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative">
    <Image src="/image3.png" alt="Sphere" fill className="object-cover" />
  </div>
);

const MyImage4 = () => (
  <div className="flex flex-1 w-full h-full min-h-[12rem] bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative">
    <Image src="/image4.png" alt="Sphere" fill className="object-cover" />
  </div>
);

const items = [
  {
    title: "Photography",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <MyImage1 />,
    icon: <IconClipboardCopy className="h-4 w-4 text-[#AE2D29]" />,
  },
  {
    title: "Poetry",
    description: "Dive into the transformative power of technology.",
    header: <MyImage2 />,
    icon: <IconFileBroken className="h-4 w-4 text-[#AE2D29]" />,
  },
  {
    title: "Painting",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <MyImage3 />,
    icon: <IconSignature className="h-4 w-4 text-[#AE2D29]" />,
  },
  {
    title: "Videos",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <MyImage4 />,
    icon: <IconTableColumn className="h-4 w-4 text-[#AE2D29]" />,
  },
];
