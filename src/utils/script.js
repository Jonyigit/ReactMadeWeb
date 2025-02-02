export let data = [
    {
        title: "Check out our most popular courses!",
    },
    {
        icon: "./src/assets/icon/icon1.svg",
        title: "Animation",
        desc: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
        btnText: "Get Started",
    },
    {
        icon: "./src/assets/icon/icon2.svg",
        title: "Design",
        desc: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
        btnText: "Get Started",
    },
    {
        icon: "./src/assets/icon/icon3.svg",
        title: "Photography",
        desc: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
        btnText: "Get Started",
    },
    {
        icon: "./src/assets/icon/icon4.svg",
        title: "Crypto",
        desc: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
        btnText: "Get Started",
    },
    {
        icon: "./src/assets/icon/icon5.svg",
        title: "Business",
        desc: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
        btnText: "Get Started",
    },
];

window.addEventListener("scroll", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 100) {
            card.classList.add("show");
        } else {
            card.classList.remove("show");
        }
    });
});
