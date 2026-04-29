export const easePremium = [0.22, 1, 0.36, 1];

export const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: easePremium },
};

export const cardHover = {
  whileHover: { y: -4, scale: 1.01 },
  whileTap: { scale: 0.985 },
  transition: { duration: 0.3, ease: easePremium },
};
