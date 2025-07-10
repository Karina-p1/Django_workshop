// Initialize AOS animation library
AOS.init({
    duration: 900,
    easing: "ease-in-out",
    once: true,
});

// Dark Mode Functionality
function setupDarkMode() {
    const toggleDark = document.getElementById("toggleDark");
    const html = document.documentElement;
    const iconMoon = document.getElementById("iconMoon");
    const iconSun = document.getElementById("iconSun");

    // Check for saved preference or system preference
    function checkDarkMode() {
        const savedMode = localStorage.getItem('darkMode');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedMode === 'dark' || (!savedMode && systemDark)) {
            html.classList.add('dark');
            iconMoon.classList.add('hidden');
            iconSun.classList.remove('hidden');
            return true;
        }
        return false;
    }

    // Initialize dark mode
    checkDarkMode();

    // Toggle function
    toggleDark.addEventListener("click", () => {
        const isDark = html.classList.toggle("dark");
        localStorage.setItem('darkMode', isDark ? 'dark' : 'light');
        
        // Update icons
        iconMoon.classList.toggle("hidden");
        iconSun.classList.toggle("hidden");
    });

    // Listen for system color scheme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('darkMode')) {
            checkDarkMode();
        }
    });
}

// Typewriter Effect
function setupTypewriter() {
    const phrases = ["Frontend Developer", "Creative Coder", "UI/UX Enthusiast"];
    const typewriter = document.getElementById("typewriter");
    let phraseIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typewriter.textContent = currentPhrase.substring(0, --letterIndex);
        } else {
            typewriter.textContent = currentPhrase.substring(0, ++letterIndex);
        }

        if (!isDeleting && letterIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeEffect, 300);
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }

    // Start typewriter effect
    typeEffect();
}

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    setupDarkMode();
    setupTypewriter();
});