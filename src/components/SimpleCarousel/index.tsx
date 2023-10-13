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
    <div className='relative'>
      <div className='overflow-auto flex justify-center'>
        <div
          ref={carousel}
          className='flex gap-x-5 scrollbar-hide scroll-px-4 lg:scroll-px-0 overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x z-0'
        >
          {itemList.map((item: ReactNode, i) => (
            <div
              key={i}
              className='snap-start shrink-0 first:ps-4 last:pe-4 lg:first:ps-0 lg:last:pe-0'
            >
              {item}
            </div>
          ))}
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
