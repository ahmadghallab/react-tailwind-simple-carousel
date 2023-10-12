import BackArrow from '../icons/BackArrow';
import ForwardArrow from '../icons/ForwardArrow';
import CarouselArrowButton from './CarouselArrowButton';
import { CarouselControlsProps, CarouselDirectionEnum } from './types';

const CarouselControls = ({
  handlePrev,
  handleNext,
  isDisabled,
}: CarouselControlsProps) => {
  return (
    <div className='absolute w-full top-1/2 left-0 -translate-y-1/2'>
      <div className='w-full hidden lg:flex lg:justify-between'>
        <CarouselArrowButton
          onClick={handlePrev}
          disabled={isDisabled(CarouselDirectionEnum.PREV)}
          icon={<BackArrow />}
        />
        <CarouselArrowButton
          onClick={handleNext}
          disabled={isDisabled(CarouselDirectionEnum.NEXT)}
          icon={<ForwardArrow />}
        />
      </div>
    </div>
  );
};

export default CarouselControls;
