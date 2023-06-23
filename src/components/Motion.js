export const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export const FADE_IN_ANIMATION_VARIANTS = {
  initial: { y: 100, opacity: 0 },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05, // Delay each letter's animation by 0.05 seconds
    },
  }),
};

export const work = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};
export const Parent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
export const bg = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
    },
  },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export const variants1 = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};
export const image = {
  hidden: {
    opacity: 0,
    x: -30,
    y: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "tween",
      stiffness: 10,
      damping: 10,
      duration: 1,
    },
  },
};
export const image1 = {
  hidden: {
    opacity: 0,
    x: 30,
    y: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "tween",
      stiffness: 10,
      damping: 10,
      duration: 1,
    },
  },
};
export const bg1 = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};
export const bg2 = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
    scale: 1,
  },
};
