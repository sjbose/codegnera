export const fromTopVariants = {
    initialState: {
        y: -250,

    },
    visible: {
        y: 0,
        transition: {
            delay: 0.6,
            type: 'tween',
            // stiffness: 80
        }
    }
}
export const pageTransitionVariants = {
    initialState: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            delay: 0.5
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
}
export const fadeUp = {
    initialState: {
        opacity: 0,
        y: '200px'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            delay: 0.5
        }
    },
    exit: {
        y: '-200px',
        transition: {
            ease: 'easeInOut'
        }
    }
}
export const radiatingBtn = {
    initialState: {
        opacity: 0.5,
        transform: {
            scale: (0.5, 0.5),

        }
    },
    visible: {
        opacity: 0,
        transform: {
            scale: (2.5, 2.5),

        }
    }
}
export const radiatingBtnOnHover = {
    onHover: {
        scale: 1.5,

    },
    transition: {
        type: 'spring',
        stiffness: 300
    }
}

export const backdrop = {
    initialState: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    }
}
export const onScrollReveal = {
    initialState: {
        opacity: 0,
        y: -250,
    },
    visible: {
        opacity: 1,
        y: 0,

    }
}