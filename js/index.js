
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});


document.querySelectorAll('.skill-bar').forEach(bar => {
    const width = bar.dataset.width;
    bar.style.width = '0';

    setTimeout(() => {
        bar.style.width = width;
        bar.style.transition = 'width 1.5s ease';
    }, 300);
});

//button
document.getElementById('contact-form').addEventListener('submit', function() {
    const btn = document.getElementById('submitBtn');

    btn.disabled = true;
    btn.textContent = 'Sending...';
});