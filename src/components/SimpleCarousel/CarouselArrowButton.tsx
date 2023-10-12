import clsx from 'clsx';
import { CarouselArrowButtonProps } from './types';
import useLayout from '../../hooks/useLayout';

const CarouselArrowButton = ({
  onClick,
  icon,
  disabled,
  ...rest
}: CarouselArrowButtonProps) => {
  const { isRTL } = useLayout();

  return (
    <button
      className={clsx(
        'w-10 h-10 rounded-full flex items-center justify-center p-px bg-white disabled:opacity-0 disabled:pointer-events-none shadow-lg hover:scale-105 transition transform duration-150 ease-out [&>svg]:w-5 [&>svg]:h-5 z-20 -mx-5',
        isRTL && 'rotate-180'
      )}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {icon}
    </button>
  );
};

export default CarouselArrowButton;
