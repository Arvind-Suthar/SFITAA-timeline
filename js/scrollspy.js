let currentActive = 0;

const sections = document.querySelectorAll(".time-sections");
window.addEventListener("scroll", () => {

    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1

    if (current !== currentActive) {
        
    }
});