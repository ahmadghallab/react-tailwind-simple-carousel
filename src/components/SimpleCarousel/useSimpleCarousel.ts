import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { CarouselDirectionEnum } from './types';
import debounce from '../../utils/debounce';
import useLayout from '../../hooks/useLayout';

const useSimpleCarousel = (carousel: React.RefObject<HTMLDivElement>) => {
  const { isRTL } = useLayout();
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleNext = () => {
    if (
      carousel.current &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const handleResize = debounce(() => {    
    setCurrentIndex(0);
    if (carousel.current) {
      carousel.current.scrollLeft = 0;
    }
  })

  const isDisabled = (direction: CarouselDirectionEnum) => {
    switch (direction) {
      case CarouselDirectionEnum.PREV:
        return currentIndex <= 0;
      case CarouselDirectionEnum.NEXT:
        if (carousel.current) {
          return carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
        }
        return false
      default:
        return false
    }
  };

  useEffect(() => {
    if (carousel.current) {
      const scrollLeft = carousel.current.offsetWidth * currentIndex;
      carousel.current.scrollLeft = isRTL ? -scrollLeft : scrollLeft
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return { handlePrev, handleNext, isDisabled };
};

export default useSimpleCarousel;
