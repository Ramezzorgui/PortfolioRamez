// 1. Charger Three.js et Vanta.js pour le fond 3D
const threeScript = document.createElement('script');
threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
document.head.appendChild(threeScript);

threeScript.onload = () => {
    const vantaScript = document.createElement('script');
    vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js";
    document.head.appendChild(vantaScript);

    vantaScript.onload = () => {
        VANTA.NET({
            el: "body",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x00f3ff,
            backgroundColor: 0x0a0a0e,
            points: 12.00,
            maxDistance: 22.00,
            spacing: 18.00
        });
    };
};

// 2. Charger GSAP pour des animations professionnelles au défilement
const gsapScript = document.createElement('script');
gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
document.head.appendChild(gsapScript);

gsapScript.onload = () => {
    const scrollTriggerScript = document.createElement('script');
    scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
    document.head.appendChild(scrollTriggerScript);

    scrollTriggerScript.onload = () => {
        gsap.registerPlugin(ScrollTrigger);

        // Animation de la sidebar
        gsap.from(".sidebar", {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        // Animation des éléments principaux
        gsap.utils.toArray('.service-item, .timeline-item, .skill-card, .content-card, .about-text').forEach(card => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.7)"
            });
        });
    };
};

// 3. Charger Vanilla Tilt pour l'effet 3D au survol
const tiltScript = document.createElement('script');
tiltScript.src = "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js";
tiltScript.onload = () => {
  VanillaTilt.init(document.querySelectorAll(".service-item, .content-card, .skill-card, .sidebar"), {
    max: 10,
    speed: 300,
    glare: true,
    "max-glare": 0.15,
  });
};
document.head.appendChild(tiltScript);
