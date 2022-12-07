/**
 receive a px number, returns rem string => pxToRem(16) => 1rem;
 */
 export const pxToRem = (px: number, defaultPx = 10): string =>
 `${px / defaultPx}rem`;
