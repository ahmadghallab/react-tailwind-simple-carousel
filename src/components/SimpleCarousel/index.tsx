import { Children, ReactNode, useMemo, useRef } from 'react';
import useSimpleCarousel from './useSimpleCarousel';
import CarouselControls from './CarouselControls';
import { SimpleCarouselProps } from './types';

function SimpleCarousel({ children }: SimpleCarouselProps) {
  const carousel = useRef(null);

  const { handleNext, handlePrev, isDisabled } = useSimpleCarousel(carousel);

  const itemList = useMemo(() => Children.toArray(children), [children]);

  return (
    <div className='lg:relative'>
      <div className='overflow-hidden'>
        <div
          ref={carousel}
          className='flex gap-1 overflow-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory touch-pan-x z-0'
        >
          {itemList.map((item: ReactNode) => item)}
        </div>
      </div>

      <CarouselControls
        handleNext={handleNext}
        handlePrev={handlePrev}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default SimpleCarousel;
