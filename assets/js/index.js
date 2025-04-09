// Initialize Lucide Icons
lucide.createIcons();
/* ==========================================
    MENU RESPONSIVE
========================================== */

$(document).ready(function () {
  // Dropdown Menu
  $(".dropdown-toggle-link").click(function (event) {
    event.preventDefault();

    const $dropdownMenu = $(this).siblings(".dropdown-menu");
    const $parentLi = $(this).closest(".nav-item");
    const $arrow = $(this).find(".arrow");

    // Close other dropdowns
    $(".dropdown-menu").not($dropdownMenu).slideUp();
    $(".nav-item").not($parentLi).removeClass("active-dropdown");
    $(".nav-item .arrow").not($arrow).removeClass("rotate");

    // Toggle current dropdown
    $dropdownMenu.slideToggle(300, function () {
      const isVisible = $dropdownMenu.is(":visible");
      $parentLi.toggleClass("active-dropdown", isVisible);
      $arrow.toggleClass("rotate", isVisible);
    });
  });

  // Toggle Site Navigation (Burger Menu)
  $("#burger").on("click", function () {
    $(this).toggleClass("active");
    $("#site-nav").toggleClass("slow d-flex active-toggle-nav");
  });

  /* ==========================================
      STICKY HEADER
  ========================================== */
  const header = document.querySelector(".header");
  const toggleClass = "is-sticky";

  const handleScroll = () => {
    if (window.pageYOffset > 150) {
      header.classList.add(toggleClass);
    } else {
      header.classList.remove(toggleClass);
    }
  };

  // Handle Sticky Header Responsively
  const handleResize = () => {
    if (window.innerWidth > 992) {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Ensure sticky applies immediately if applicable
    } else {
      window.removeEventListener("scroll", handleScroll);
      header.classList.remove(toggleClass);
    }
  };

  // Initial Check & Bind Resize Event
  handleResize();
  window.addEventListener("resize", handleResize);

  /* ==========================================
      BANNER SLIDER
  ========================================== */
  new Swiper(".banner-slider", {
      loop: true,
      spaceBetween: 50,
      speed: 1000,
      effect: 'fade',
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      }
  });
});

/* ==========================================
     SLIDER
  ========================================== */

var swiper = new Swiper(".events-slider", {
  slidesPerView: 1.15,
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

document.addEventListener("DOMContentLoaded", () => {
	const sliders = document.querySelectorAll(".emotions-slider");

	if (!sliders.length) return;

	const list = [];

	sliders.forEach((element) => {
		const [slider, prevEl, nextEl, pagination] = [
			element.querySelector(".swiper"),
			element.querySelector(".slider-nav__item_prev"),
			element.querySelector(".slider-nav__item_next"),
			element.querySelector(".slider-pagination")
		];

		list.push(
			new Swiper(slider, {
				slidesPerView: "auto",
        loop: true,
 
				spaceBetween: 20,
				speed: 600,
				observer: true,
				watchOverflow: true,
				watchSlidesProgress: true,
				centeredSlides: true,
				initialSlide: 1,
				navigation: { nextEl, prevEl, disabledClass: "disabled" },
				pagination: {
					el: pagination,
					type: "bullets",
					modifierClass: "slider-pagination",
					bulletClass: "slider-pagination__item",
					bulletActiveClass: "active",
					clickable: true
				},
				breakpoints: {
					768: { spaceBetween: 40 },
                // mobile
          365: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
				}
			})
		);
	});
});



var swiper = new Swiper(".achivment-slider", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

/* ==========================================
    Scroll
  ========================================== */

// Select all content sections (including header and footer)
const sections = document.querySelectorAll("section, header, footer");
const navLinks = document.getElementById("site-nav").querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // Check if the section is in the viewport
    if (
      scrollY >= sectionTop - 100 &&
      scrollY < sectionTop + sectionHeight - 100
    ) {
      current = section.getAttribute("id");
    }
  });

  // Remove 'active' class from all links and activate the correct one
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


var eventsweeper = new Swiper(".event-sweeper", {
  loop: true,
  autoplay: {
    delay: 1000,
  },
  slidesPerView: 1,
  loopAdditionalSlide: 2,
  grabCursor: true,
  initialSlide: 4.5,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  speed: 1000,
  freeMode: false,
  mousewheel: {
    thresholdDelta: 30,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  on: {
    click(event) {
      eventsweeper.slideTo(this.clickedIndex);
    },
  },
});


var swiperEffect = new Swiper(".swiperEffect", {
  loop: true,
  autoplay: false,
  effect: "cards",
  grabCursor: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


var swiperFade = new Swiper(".swiperFade", {
  loop: true,
  slidesPerView:4 ,
  spaceBetween: 30,
  freeMode: true,

  breakpoints: {
    // mobile
    365: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 320px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 4,
      spaceBetween: 50
    }
  },

});
