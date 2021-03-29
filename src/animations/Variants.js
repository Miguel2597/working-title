const pageVariants = {
    initial: {
        opacity: 0,
        x: -100
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        x: -100,
        transition: {
            ease: 'easeInOut'
        }
    }
}

const fullDescVariants= {
    initial: {
        opacity: 0,
        y: -100
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        y: -100,
        transition: {
            ease: 'easeInOut'
        }
    }
}

const imageVariants = {
    initial: direction => (
        {
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }
    ),
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.3
        }
    },
    exit: direction => (
        {
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            transition: {
                ease: 'easeOut'
            }
        }
    )
};

export { pageVariants, fullDescVariants, imageVariants }