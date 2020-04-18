const sizes = {
  xs: 600,
  sm: 960,
  md: 1280, // 720p
  lg: 1920, // 1080p | WUXGA
  xl: 2048, // 2K
  xxl: 3840, // UHD
  sl: 4096, // Cinema (4K)
  sxl: 7680, // 8K
};

const above = {};
const below = {};
const between = {};

Object.keys(sizes).forEach((key) => {
  above[key] = `@media (min-width: ${sizes[key]}px)`;
});

Object.keys(sizes).forEach((key) => {
  below[key] = `@media (max-width: ${sizes[key] - 1}px)`;
});

Object.keys(sizes).forEach((key) => {
  between[key] = `@media (min-width: ${sizes[key]}px) and (max-width: ${sizes[key] - 1}px)`;
});

export { above, below, between };
