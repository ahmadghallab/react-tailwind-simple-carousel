const BackArrow = ({ className }: { className?: string }) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' className={className}>
      <path
        d='m10.9 12 4.6 6h-3.8l-4.6-6 4.6-6h3.8l-4.6 6Z'
        fill='currentColor'
      ></path>
    </svg>
  );
};

export default BackArrow;
