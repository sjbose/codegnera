export const fromTopVariants = {
    initialState: {
        y: -250,

    },
    visible: {
        y: 0,
        transition: {
            delay: 0.2,
            type: 'spring',
            stiffness: 80
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
            type: 'tween',
            delay: 2
        }
    },
    exit: {
        y: '-200px',
        transition: {
            ease: 'easeInOut'
        }
    }
}