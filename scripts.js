document.addEventListener("DOMContentLoaded", () => {

    // Smooth page load
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity .6s ease";
        document.body.style.opacity = "1";
    }, 100);

    // Join Button Animation
    const btn = document.querySelector(".join-btn");

    if (btn) {

        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "translateY(-4px) scale(1.02)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translateY(0) scale(1)";
        });

        btn.addEventListener("click", () => {
            btn.style.transform = "scale(.96)";

            setTimeout(() => {
                btn.style.transform = "scale(1)";
            }, 150);
        });

    }

    // Fade-in animation
    const elements = document.querySelectorAll(
        ".logo-box,.feature,.subtitle,.join-btn,.quote,.agency,.footer-links,.disclaimer"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(25px)";
        el.style.transition = "all .6s ease";

        observer.observe(el);

    });

});

const joinBtn = document.querySelector(".join-btn");

joinBtn.addEventListener("mousemove",(e)=>{

    const rect = joinBtn.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    joinBtn.style.background =
    `radial-gradient(circle at ${x}px ${y}px,
    rgba(255,255,255,.25),
    transparent 45%),
    linear-gradient(90deg,#00C6FF,#7F3DFF)`;

});

joinBtn.addEventListener("mouseleave",()=>{

    joinBtn.style.background =
    "linear-gradient(90deg,#00C6FF,#7F3DFF)";

});