
const useLayout = () => {
  const isRTL = false;
  const dir = isRTL ? 'rtl' : 'ltr';

  return { dir, isRTL }
}

export default useLayout;