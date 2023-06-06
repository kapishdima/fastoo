export const isMobile = () => {
  return window.matchMedia('(max-width: 768px)').matches;
};

export const isTablet = () => {
  return window.matchMedia('(max-width: 768px)').matches;
};

export const isTouchableDevice = () => {
  return window.matchMedia('(max-width: 1024px)').matches;
};
