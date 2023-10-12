import clsx from 'clsx';
import { CarouselArrowButtonProps } from './types';
import ForwardArrow from '../icons/ForwardArrow';
import useLayout from '../../hooks/useLayout';

const CarouselNextButton = ({
  onClick,
  disabled,
  ...rest
}: CarouselArrowButtonProps) => {
  const { isRTL } = useLayout();

  return (
    <button
      className={clsx(
        'w-10 h-10 rounded-full flex items-center justify-center p-px bg-white disabled:opacity-0 disabled:pointer-events-none shadow-lg hover:scale-105 transition transform duration-150 ease-out [&>svg]:w-5 [&>svg]:h-5 -mx-5 absolute top-1/2 -translate-y-1/2',
        isRTL ? 'rotate-180 left-0' : 'right-0'
      )}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <ForwardArrow />
    </button>
  );
};

export default CarouselNextButton;
