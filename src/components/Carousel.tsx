import React, { ReactNode, useState } from 'react';
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
        <img
          src="data:image/svg+xml,%3csvg%20width='10'%20height='17'%20viewBox='0%200%2010%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.3042%201L1.36469%208.78658L9.15127%2015.7261'%20stroke='%23525252'%20stroke-width='1.5'/%3e%3c/svg%3e"
          alt="이전 전환"
        />
      </button>
      <button
        className={`absolute top-1/2 right-2 rotate-180 ${currentIndex === nodes.length - 1 && 'opacity-50 cursor-not-allowed'}`}
        onClick={addIndex}
        disabled={currentIndex === nodes.length - 1}
      >
        <img
          src="data:image/svg+xml,%3csvg%20width='10'%20height='17'%20viewBox='0%200%2010%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.3042%201L1.36469%208.78658L9.15127%2015.7261'%20stroke='%23525252'%20stroke-width='1.5'/%3e%3c/svg%3e"
          alt="다음 전환"
        />
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
