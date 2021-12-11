export const particlesOptions = {
    fpsLimit: 30,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse",
            }
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 300,
                duration: 0.9,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
        },
        collisions: {
            enable: false,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1.5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 1500,
            },
            value: 40,
        },
        opacity: {
            value: 0.2,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: false,
            value: 3,
        },
    },
    detectRetina: true,
}