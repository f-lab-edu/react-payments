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
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'relative',
          height: '200px',
          display: 'flex',
          backgroundColor: '#f0f0f0',
          width: '100%',
          margin: 'auto',
          overflow: 'hidden',
          textAlign: 'center',
          alignItems: 'center',
          maxWidth: width,
          boxSizing: 'border-box',
        }}
      >
        {nodes.map((node, i) => (
          <CarouselItem key={i} index={i} currentIndex={currentIndex}>
            {node}
          </CarouselItem>
        ))}
      </div>
      <button
        style={{
          position: 'absolute',
          top: '50%',
          left: '2px',
          opacity: currentIndex === 0 ? '0.5' : '1',
          cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
        }}
        onClick={subIndex}
        disabled={currentIndex === 0}
      >
        <ArrowIcon alt="이전 카드" />
      </button>
      <button
        style={{
          position: 'absolute',
          top: '50%',
          right: '2px',
          transform: 'rotate(180deg)',
          opacity: currentIndex === nodes.length - 1 ? '0.5' : '1',
          cursor: currentIndex === nodes.length - 1 ? 'not-allowed' : 'pointer',
        }}
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
      // className="absolute transition-all duration-500 ease-in-out transform items-center flex justify-center"
      style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: WIDTH, // - SPACING * 2,
        // left: SPACING + (index - currentIndex) * (WIDTH - SPACING * 2),
        left: (index - currentIndex) * WIDTH,
        transition: 'all 0.5s ease-in-out',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  );
};

export default Carousel;
