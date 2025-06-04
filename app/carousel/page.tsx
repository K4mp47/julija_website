import { CarouselDemo } from "../components/carousel/carousel";

export default function Carousel() {
  // Animate each item when in view
  // If you want all to animate at once, use a single ref; for per-item, use an array

  return (
    <div>
      <div className="h-screen flex justify-center items-center mx-2">
          <CarouselDemo />
      </div>
    </div>
  );
}

