import React, { ReactNode, useState } from 'react';
import ArrowIcon from './icons/ArrowIcon';
let WIDTH = 280;
let SPACING = 28;
interface CarouselProps {
  children: ReactNode | ReactNode[];
  width?: number;
  spacing?: number;
}
const Carousel = ({
  children,
  width = WIDTH,
  spacing = SPACING,
}: CarouselProps) => {
  WIDTH = width;
  SPACING = spacing;
  const [currentIndex, setCurrentIndex] = useState(0);
  const nodes = React.Children.toArray(children);

  const addIndex = () => {
    if (currentIndex === nodes.length - 1) {
      return;
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const subIndex = () => {
    if (currentIndex === 0) {
      return;
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative">
      <div
        className="relative h-[200px] flex bg-gray-100 w-full m-auto overflow-hidden text-center items-center"
        style={{ maxWidth: width }}
      >
        {nodes.map((node, i) => (
          <CarouselItem key={i} index={i} currentIndex={currentIndex}>
            {node}
          </CarouselItem>
        ))}
      </div>
      <button
        className={`absolute top-1/2 left-2 ${currentIndex === 0 && 'opacity-50 cursor-not-allowed'}`}
        onClick={subIndex}
        disabled={currentIndex === 0}
      >
        <ArrowIcon alt="이전 카드" />
      </button>
      <button
        className={`absolute top-1/2 right-2 rotate-180 ${currentIndex === nodes.length - 1 && 'opacity-50 cursor-not-allowed'}`}
        onClick={addIndex}
        disabled={currentIndex === nodes.length - 1}
      >
        <ArrowIcon alt="다음 카드" />
      </button>
    </div>
  );
};

const CarouselItem = ({
  index,
  currentIndex,
  children,
}: {
  index: number;
  currentIndex: number;
  children: ReactNode;
}) => {
  return (
    <div
      className="absolute transition-all duration-500 ease-in-out transform items-center flex justify-center"
      style={{
        width: WIDTH - SPACING * 2,
        left: SPACING + (index - currentIndex) * (WIDTH - SPACING * 2),
      }}
    >
      {children}
    </div>
  );
};

export default Carousel;
