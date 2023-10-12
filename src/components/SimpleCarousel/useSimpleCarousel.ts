import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import debounce from '../../utils/debounce';
import useLayout from '../../hooks/useLayout';

const useSimpleCarousel = (carousel: React.RefObject<HTMLDivElement>) => {
  const { isRTL } = useLayout();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxScrollWidth, setMaxScrollWidth] = useState(0);
  const [offsetWidth, setOffsetWidth] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleNext = () => {
    if (offsetWidth * currentIndex <= maxScrollWidth) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const handleResize = debounce(() => {    
    setCurrentIndex(0);
    if (carousel.current) {
      carousel.current.scrollLeft = 0;
    }
  })

  const isFirst = useMemo(() => {    
    return currentIndex <= 0;
  }, [currentIndex]);

  const isLast = useMemo(() => {    
    return offsetWidth * currentIndex >= maxScrollWidth
  }, [currentIndex, maxScrollWidth, offsetWidth])
  
  useEffect(() => {
    if (carousel.current) {
      const scrollLeft = offsetWidth * currentIndex;
      carousel.current.scrollLeft = isRTL ? -scrollLeft : scrollLeft
    }
  }, [currentIndex]);

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    
    setMaxScrollWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    setOffsetWidth(carousel.current.offsetWidth)
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { handlePrev, handleNext, isFirst, isLast };
};

export default useSimpleCarousel;
