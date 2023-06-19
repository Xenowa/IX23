import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ReactParticles() {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    return (
        // <Particles
        //     id="tsparticles"
        //     init={particlesInit}

        //     options={{
        //         "fullScreen": {
        //             "enable": false,
        //             "zIndex": 1
        //         },
        //         "particles": {
        //             "number": {
        //                 "value": 313,
        //                 "density": {
        //                     "enable": true,
        //                     "value_area": 800
        //                 }
        //             },
        //             "color": {
        //                 "value": "#AEEB40"
        //             },
        //             "shape": {
        //                 "type": "circle",
        //                 "stroke": {
        //                     "width": 0,
        //                     "color": "#000000"
        //                 },
        //                 "polygon": {
        //                     "nb_sides": 3
        //                 }
        //             },
        //             "opacity": {
        //                 "value": 1,
        //                 "random": true,
        //                 "anim": {
        //                     "enable": true,
        //                     "speed": 1,
        //                     "opacity_min": 0,
        //                     "sync": false
        //                 }
        //             },
        //             "size": {
        //                 "value": 3,
        //                 "random": true,
        //                 "anim": {
        //                     "enable": false,
        //                     "speed": 300,
        //                     "size_min": 0.3,
        //                     "sync": false
        //                 }
        //             },
        //             "line_linked": {
        //                 "enable": false,
        //                 "distance": 32,
        //                 "color": "#ffffff",
        //                 "opacity": 0.4,
        //                 "width": 1
        //             },
        //             "move": {
        //                 "enable": true,
        //                 "speed": 0.2,
        //                 "direction": "top-right",
        //                 "random": true,
        //                 "straight": false,
        //                 "out_mode": "out",
        //                 "bounce": false,
        //                 "attract": {
        //                     "enable": false,
        //                     "rotateX": 600,
        //                     "rotateY": 600
        //                 }
        //             }
        //         },
        //         "interactivity": {
        //             "events": {
        //                 "onhover": {
        //                     "enable": false,
        //                     "mode": ["grab"]
        //                 },
        //                 "onclick": {
        //                     "enable": false,
        //                     "mode": "bubble"
        //                 },
        //                 "resize": true
        //             },
        //             "modes": {
        //                 "grab": {
        //                     "distance": 400,
        //                     "line_linked": {
        //                         "opacity": 1
        //                     }
        //                 },
        //                 "bubble": {
        //                     "distance": 400,
        //                     "size": 40,
        //                     "duration": 2,
        //                     "opacity": 8,
        //                     "speed": 3
        //                 },
        //                 "repulse": {
        //                     "distance": 200
        //                 },
        //                 "push": {
        //                     "particles_nb": 4
        //                 },
        //                 "remove": {
        //                     "particles_nb": 2
        //                 }
        //             }
        //         },
        //         "retina_detect": true,
        //         "background": {
        //             "position": "50% 50%",
        //             "repeat": "no-repeat",
        //             "size": "cover",
        //         }
        //     }}
        // />
        <Particles
            id="tsparticles"
            init={particlesInit}

            options={{
                fpsLimit: 60,
                fullScreen: {
                    enable: false,
                },
                background: {
                    color: "#000000",
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onClick: { enable: false, mode: "push" },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                            parallax: { enable: false, force: 60, smooth: 10 }
                        },
                        resize: true
                    },
                    modes: {
                        bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40, speed: 3 },
                        grab: { distance: 400, links: { opacity: 1 } },
                        push: { quantity: 4 },
                        remove: { quantity: 2 },
                        repulse: { distance: 200, duration: 0.4 }
                    }
                },
                particles: {
                    color: { value: "random" },
                    links: {
                        color: "random",
                        distance: 150,
                        enable: false,
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        attract: { enable: false, rotateX: 600, rotateY: 1200 },
                        bounce: false,
                        direction: "none",
                        enable: true,
                        out_mode: "out",
                        random: false,
                        speed: 0.7,
                        straight: false
                    },
                    rotate: {
                        animation: {
                            enable: true,
                            speed: 10,
                            sync: false
                        }
                    },
                    number: { density: { enable: true, area: 800 }, value: 30 },
                    opacity: {
                        animation: { enable: true, minimumValue: 0.5, speed: 1, sync: false },
                        random: false,
                        value: 1
                    },
                    shape: {
                        character: [
                            {
                                fill: true,
                                font: "Verdana",
                                value: ["🖤", "💚"],
                                style: "",
                                weight: 400
                            }
                        ],
                        type: "char"
                    },
                    size: {
                        anim: { enable: true, minimumValue: 8, speed: 20, sync: false },
                        random: { minimumValue: 8, enable: true },
                        value: 36
                    }
                },
                detectRetina: true
            }}
        />
    )
}
