export const textAnimation = {
    hidden: {
        x: -50,
        opacity: 0
    },
    visible: () => ({
        x: 0,
        opacity: 1,
        transition: {delay: 0.4, duration: 1.5 }
    })
}

export const textAnimation2 = {
    hidden: {
        opacity: 0
    },
    visible: () => ({
        opacity: 1,
        transition: { duration: 1 }
    })
}