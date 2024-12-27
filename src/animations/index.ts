export const containerVariants = {
    visible: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        }
    },
};

export const itemVariants = {
    hidden: { y: 400 },
    visible: {
        y: 0,
        transition: {
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.95],
        },
    },
};