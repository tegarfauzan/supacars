document.addEventListener("DOMContentLoaded", function () {
    let previousIndex = 0; // Menyimpan index sebelumnya di luar event listener
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",

            renderBullet: function (index, className) {
                const images = [
                    "assets/images/car1child.png",
                    "assets/images/car2child.png",
                    "assets/images/car3child.png",
                    "assets/images/car4child.png",
                    "assets/images/car5child.png",
                    "assets/images/10+.png",
                ];
                if (index === images.length - 1) {
                    return `<button type="button" class="${className}"">
                            <img src="${images[index]}" alt="car" class="mix-blend-luminosity rounded-full"/>
                        </button>`;
                } else {
                    return `<button type="button" class="${className}">
                            <img src="${images[index]}" alt="car" class="mix-blend-luminosity rounded-full"/>
                        </button>`;
                }
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: false,
        on: {
            slideChange: function () {
                const currentIndex = this.activeIndex; // Mendapatkan indeks slide aktif saat ini
                // Jika di slide ke-4 dan menggeser ke kanan
                if (currentIndex === 5) {
                    this.slideTo(0); // Kembali ke slide ke-0
                } else {
                    this.allowTouchMove = true;
                }

                // Update previousIndex setelah slide berubah
                previousIndex = currentIndex;
            },
        },
    });

    // tabs
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => {
                t.classList.remove("active-tab", "bg-[#FFFFFF]", "text-[#2F3137]");
                t.classList.add("text-[rgba(47,49,55,0.6)]");
            });

            contents.forEach((c) => c.classList.add("hidden"));

            tab.classList.add("active-tab", "bg-[#FFFFFF]", "text-[#2F3137]");
            tab.classList.remove("text-[rgba(47,49,55,0.6)]");

            contents[index].classList.remove("hidden");
        });
    });
});
