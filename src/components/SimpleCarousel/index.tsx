import { Children, ReactNode, useMemo, useRef } from 'react';
import useSimpleCarousel from './useSimpleCarousel';
import { SimpleCarouselProps } from './types';
import CarouselPrevButton from './CarouselPrevButton';
import CarouselNextButton from './CarouselNextButton';

function SimpleCarousel({ children }: SimpleCarouselProps) {
  const carousel = useRef(null);

  const { handleNext, handlePrev, isFirst, isLast } =
    useSimpleCarousel(carousel);

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

      <div className='hidden lg:block'>
        <CarouselPrevButton onClick={handlePrev} disabled={isFirst} />
        <CarouselNextButton onClick={handleNext} disabled={isLast} />
      </div>
    </div>
  );
}

export default SimpleCarousel;
