// script.js
document.querySelectorAll(".tilt-item").forEach((item) => {
    const strength = 15; // Sedikit dinaikkan biar lebih kerasa miringnya

    function isMobile() {
        return window.innerWidth < 768;
    }

    item.addEventListener("mousemove", (e) => {
        if (isMobile()) return;

        // MATIKAN transisi CSS saat mouse bergerak agar tilt lancar
        item.style.transition = "none";

        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * strength;
        const rotateX = -((y / rect.height) - 0.5) * strength;

        // Gabungkan Tilt (Rotate) dan Lift (Translate)
        item.style.transform = `
            perspective(1000px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            translate(-8px, -8px)
        `;
        // Tambahkan shadow manual di JS agar sinkron dengan gerakan
        item.style.boxShadow = "16px 16px 0px #000";
    });

    item.addEventListener("mouseleave", () => {
        // HIDUPKAN LAGI transisi saat kursor keluar agar balik ke posisi semula dengan halus
        item.style.transition = "all 0.2s ease-out";
        item.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translate(0, 0)";
        item.style.boxShadow = "6px 6px 0px #000";
    });
});