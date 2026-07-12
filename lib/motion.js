// Central place for every animation timing decision on the site.
// Everything routes through a real spring (stiffness/damping/mass) rather
// than eased durations, so motion feels physical instead of "animated".

export const springSoft = { type: "spring", stiffness: 100, damping: 20, mass: 1 };
export const springSnappy = { type: "spring", stiffness: 260, damping: 22, mass: 0.9 };
export const springGentle = { type: "spring", stiffness: 70, damping: 18, mass: 1.1 };

// Parent wrapper: staggers each direct motion child by 0.1s
export const staggerContainer = (stagger = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

// Child entrance: fade-in-up on spring physics
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: springSoft },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: springSoft },
};

// Standard viewport config so scroll reveals only fire once, a little early
export const viewportOnce = { once: true, amount: 0.2, margin: "0px 0px -80px 0px" };
