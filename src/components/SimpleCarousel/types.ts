import { ReactNode } from "react";

export enum CarouselDirectionEnum {
  PREV = 'prev',
  NEXT = 'next'
}

export interface SimpleCarouselProps {
  children: ReactNode
}

export interface CarouselControlsProps {
  handlePrev: () => void;
  handleNext: () => void;
  isDisabled: (direction: CarouselDirectionEnum) => boolean
}

export interface CarouselArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  disabled: boolean;
}