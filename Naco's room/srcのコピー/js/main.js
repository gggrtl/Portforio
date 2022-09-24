"use strict";

//スムーススクロールとモーダルメニュー
//スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.hash),
      adjust = 60,
      offsetTop =
        window.pageYOffset + target.getBoundingClientRect().top - adjust;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

    if (document.querySelector("#nav").classList.contains("active")) {
      const timerId = setInterval(() => {
        if (window.pageYOffset === offsetTop) {
          clearInterval(timerId);
          document.querySelector("#nav").classList.remove("active");
        
        }
      },600);
    }
  });
});

document.querySelector("#menu").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#nav").classList.add("active");
  
});


// index
$(".top_index_slideshow").slick({
  autoplay: true, // 自動再生をオン
  autoplaySpeed: 1500,
  delay: 1,
  infinite: true,
  dots: false, // ドットナビを出現させる
  prevArrow: false,

  nextArrow: false,
});

//  about
const targetElement = document.querySelectorAll(".js_show");

document.addEventListener("scroll", function () {
  for (let i = 0; i < targetElement.length; i++) {
    let getElementDistance =
      targetElement[i].getBoundingClientRect().top +
      targetElement[i].clientHeight * 0.3;
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
});

//  about
const typingElement = document.querySelectorAll(".js_typing");

document.addEventListener("scroll", function () {
  for (let i = 0; i < typingElement.length; i++) {
    let getElementDistance = typingElement[i].getBoundingClientRect().top;
    if (window.innerHeight > getElementDistance) {
      $(function () {
        $(".js_typing").typed({
          //表示したい文字
          strings: [
            "ドラマ鑑賞、美味しいものを食べること、音楽を聴くこと、写真を撮ることが大好きです。",
          ],
          typeSpeed: 30,
          startDelay: 100,
          backSpeed: 10,
          loop: false,
          showCursor: false,
          //
        });
      });
    }
  }
});

//cta
document.querySelectorAll(".js_color").forEach((el, idx) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: ".top_cta_txt",
      start: `top 92%-=${idx * 13}`,
      markers: false,
      scrub: true,
      onEnter: () => el.classList.add("is-scrolled"),
      onLeaveBack: () => el.classList.remove("is-scrolled"),
    },
  });
});

// service
function sliderAnimation() {
  var width = $(window).width();
  if (width <= 769) {
    $(".top_service_contents_list").slick({
      autoplay: true,
      autoplaySpeed: 1800,
      infinite: true,
      centerMode: false,
      // dots: true,
      // dotsClass: 'm_slide-dots',
      prevArrow: '<button class="m_slide-btn m_slide-btn__prev"></button>', 
      nextArrow: '<button class="m_slide-btn m_slide-btn__next"></button>', 
      
    });
  }
}
sliderAnimation();
$(window).resize(function () {
  sliderAnimation();
});


//top_kv
gsap.from(".js_sub_copy", {
  delay: 0.3,
  opacity: 0,
  x: "20%",
  duration: 2.1,
  ease: "power2",
});


gsap.from(".js_copy", {
  delay: 0.5,
  opacity: 0,
  y: "100%",
  duration: 2.1,
  ease: "power2",
});



//header

const headerMove = $(".l_header_animation");
$(window).on("load scroll", function () {
  if ($(this).scrollTop() > 10 && headerMove.hasClass("is_fixed") == false) {
    headerMove.css("display", "block");
    headerMove.css({ to: "-80px" });
    headerMove.addClass("is_fixed");
    headerMove.animate({ to: 0 }, 1500);
    $(".l_header-logo_animation").addClass("is_fixed");
  } else if (
    $(this).scrollTop() < 10 &&
    headerMove.hasClass("is_fixed") == true
  ) {
    headerMove.removeClass("is_fixed");
    headerMove.addClass("is_hide");
    $(".l_header-logo_animation").removeClass("is_fixed");
  }
});



const btnMove = document.querySelectorAll(".js_btn_wrapper");
document.addEventListener("scroll", function () {
  for (let i = 0; i < btnMove.length; i++) {
    let getBtnDistance =
      btnMove[i].getBoundingClientRect().top + btnMove[i].clientHeight * 0.8;
    if (window.innerHeight > getBtnDistance) {
      btnMove[i].classList.add("is_active");
      $(".js_btn")[i].classList.add("is_active");
    }
  }
});

//page service

gsap.from(".top_service_contents_item_inner", {
  scrollTrigger: {
    trigger: ".top_service_title",
    start: "center 70%",
    end: "center top",
    markers: false,
  },
  duration: 1.2,
  y: 60, // 少し上に移動させる
  opacity: 0,

  // 複数要素を扱うプロパティ
  stagger: {
    from: "start", //左側から
    amount: 1.0, 
  },
});

//works

const showElements = document.querySelectorAll(".works_animation");
window.addEventListener("scroll", function () {
  for (let i = 0; i < showElements.length; i++) {
    const getWorksElementDistance =
      showElements[i].getBoundingClientRect().top +
      showElements[i].clientHeight * 0.4;
    if (window.innerHeight > getWorksElementDistance) {
      showElements[i].classList.add("active");
    }
  }
});






$(".works_contents_slideshow").slick({
  prevArrow: '<button class="m_slide-btn m_slide-btn__prev"></button>', 
      nextArrow: '<button class="m_slide-btn m_slide-btn__next"></button>', 
});
