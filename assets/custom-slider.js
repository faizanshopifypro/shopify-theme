// @license
// Petzy, by Logicgo Themes

// category collection slider

document.addEventListener('DOMContentLoaded', function () {
  var categorycollection1Swipers = [];

  function initcategorycollection1Swiper(swiperContainer) {

      var desktop = swiperContainer.dataset.desktop;
      var largeTablet = swiperContainer.dataset.largetablet;
      var tablet = swiperContainer.dataset.tablet;
      var mobile = swiperContainer.dataset.mobile;
      var autoplay = swiperContainer.dataset.autoplay === "true";
      var loop = swiperContainer.dataset.loop === "true";
      var speed = swiperContainer.dataset.speed;
      var desktopspace = swiperContainer.dataset.desktopspace;
      var mobilespace = swiperContainer.dataset.mobilespace;

      var categorycollection1Swiper = new Swiper(swiperContainer, {
          slidesPerView: desktop,
          spaceBetween: desktopspace,
          loop: loop,
          autoplay: autoplay,
          speed: speed,
          grabCursor: true,
          a11y: false,
          navigation: {
              nextEl: swiperContainer.querySelector(".category-swiper-button-next"),
              prevEl: swiperContainer.querySelector(".category-swiper-button-prev")
          },
          pagination: {
              el: swiperContainer.querySelector(".category-swiper-pagination"),
              clickable: true,
          },
          breakpoints : {
            320: {
                slidesPerView: mobile,
                spaceBetween: mobilespace,
            },
            576: {
                slidesPerView: tablet,
                spaceBetween: mobilespace,
            },
            841: {
                slidesPerView: largeTablet,
                spaceBetween: mobilespace,
            },
            992: {
                slidesPerView: desktop,
                spaceBetween: desktopspace,
            },
            1200: {
                slidesPerView: desktop,
                spaceBetween: desktopspace,
            },
          }
      });

    categorycollection1Swipers.push(categorycollection1Swiper);
  }

  // Initialize category collection Swiper on page load
  document.querySelectorAll('.main-collections-list-wrapper').forEach(function (swiperContainer) {
      initcategorycollection1Swiper(swiperContainer);
  });

  document.addEventListener('shopify:section:select', function () {
      // Reinitialize category collection Swiper on section select
      categorycollection1Swipers.forEach(function (swiper) {
          swiper.destroy();
      });
      categorycollection1Swipers = [];
      document.querySelectorAll('.main-collections-list-wrapper').forEach(function (swiperContainer) {
          initcategorycollection1Swiper(swiperContainer);
      });
  });

  document.addEventListener('shopify:section:deselect', function () {
      // Cleanup category collection Swiper on section deselect if necessary
      categorycollection1Swipers.forEach(function (swiper) {
          swiper.destroy();
      });
      categorycollection1Swipers = [];
  });
});

// hero slider js

document.addEventListener('DOMContentLoaded', function () {
  var herosliderSwipers = [];

  function initherosliderSwiper(swiperContainer) {
      var autoplay = swiperContainer.dataset.autoplay === "true";
      var loop = swiperContainer.dataset.loop === "true";
      var speed = swiperContainer.dataset.speed;
      var slider = swiperContainer.dataset.slider;
      var breakpoints = {};
      if(slider === 'third_slider'){
        breakpoints = {
          1200: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        };
    }
    if(slider === 'five_slider'){
      breakpoints = {
          1200: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          768: {
            slidesPerView: 2
          },
          480: {
            slidesPerView: 1
          }
        };
    }
    if(slider === 'sixth_slider'){
        breakpoints = {
          480: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          992: {
            slidesPerView: 1.24,
            spaceBetween: 30,
            centeredSlides: true
          }
        };
      }

      var herosliderSwiper = new Swiper(swiperContainer, {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: loop,
          autoplay: autoplay,
          speed: speed,
          grabCursor: true,
          navigation: {
              nextEl: swiperContainer.querySelector(".slider-swiper-button-next"),
              prevEl: swiperContainer.querySelector(".slider-swiper-button-prev")
          },
          pagination: {
              el: swiperContainer.querySelector(".slider-swiper-pagination"),
              clickable: true,
          },
          breakpoints: breakpoints
      });

      herosliderSwipers.push(herosliderSwiper);
  }

  // Initialize Hero slider Swiper on page load
  document.querySelectorAll('.classic-container').forEach(function (swiperContainer) {
      initherosliderSwiper(swiperContainer);
  });

  document.addEventListener('shopify:section:select', function () {
      // Reinitialize Hero slider Swiper on section select
      herosliderSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      herosliderSwipers = [];
      document.querySelectorAll('.classic-container').forEach(function (swiperContainer) {
          initherosliderSwiper(swiperContainer);
      });
  });

  document.addEventListener('shopify:section:deselect', function () {
      // Cleanup Hero slider Swiper on section deselect if necessary
      herosliderSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      herosliderSwipers = [];
  });
});

// featured collection slider js

document.addEventListener('DOMContentLoaded', function () {
  var FeaturedcollectionSwipers = [];

  function initFeaturedcollectionSwiper(swiperContainer) {
      var enable = swiperContainer.dataset.enable;
      var desktopspace = swiperContainer.dataset.desktopspace;
      var mobilespace = swiperContainer.dataset.mobilespace;
      var desktop = swiperContainer.dataset.desktop;
      var largeTablet = swiperContainer.dataset.largetablet;
      var tablet = swiperContainer.dataset.tablet;
      var mobile = swiperContainer.dataset.mobile;
      var autoplay = swiperContainer.dataset.autoplay === "true";
      var loop = swiperContainer.dataset.loop === "true";
      var speed = swiperContainer.dataset.speed;

    if (enable) {
      var FeaturedcollectionSwiper = new Swiper(swiperContainer, {
          slidesPerView: desktop,
          spaceBetween: desktopspace,
          loop: loop,
          autoplay: autoplay,
          speed: speed,
          grabCursor: true,
          a11y: false,
          navigation: {
              nextEl: swiperContainer.querySelector(".featured-swiper-button-next"),
              prevEl: swiperContainer.querySelector(".featured-swiper-button-prev")
          },
          pagination: {
              el: swiperContainer.querySelector(".featured-swiper-pagination"),
              clickable: true,
          },
          breakpoints: {
            320: {
                slidesPerView: mobile,
                spaceBetween: mobilespace
            },
            576: {
                slidesPerView: tablet,
                spaceBetween: mobilespace
            },
            841: {
                slidesPerView: largeTablet,
                spaceBetween: mobilespace
            },
            992: {
                slidesPerView: desktop,
                spaceBetween: desktopspace
            },
        },
      });

      FeaturedcollectionSwipers.push(FeaturedcollectionSwiper);
    }
  }

  // Initialize Featured collection Swiper on page load
  document.querySelectorAll('.featured-slider').forEach(function (swiperContainer) {
      initFeaturedcollectionSwiper(swiperContainer);
  });

  document.addEventListener('shopify:section:select', function () {
      // Reinitialize Featured collection Swiper on section select
      FeaturedcollectionSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      FeaturedcollectionSwipers = [];
      document.querySelectorAll('.featured-slider').forEach(function (swiperContainer) {
          initFeaturedcollectionSwiper(swiperContainer);
      });
  });

  document.addEventListener('shopify:section:deselect', function () {
      // Cleanup Featured collection Swiper on section deselect if necessary
      FeaturedcollectionSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      FeaturedcollectionSwipers = [];
  });
});

// tab collection slider js

document.addEventListener('DOMContentLoaded', function () {
  var TabcollectionSwipers = [];

  function initTabcollectionSwiper(swiperContainer) {
      var enable = swiperContainer.dataset.enable;
      var desktopspace = swiperContainer.dataset.desktopspace;
      var mobilespace = swiperContainer.dataset.mobilespace;
      var desktop = swiperContainer.dataset.desktop;
      var largeTablet = swiperContainer.dataset.largetablet;
      var tablet = swiperContainer.dataset.tablet;
      var mobile = swiperContainer.dataset.mobile;
      var autoplay = swiperContainer.dataset.autoplay === "true";
      var loop = swiperContainer.dataset.loop === "true";
      var speed = swiperContainer.dataset.speed;

    if (enable) {
      var TabcollectionSwiper = new Swiper(swiperContainer, {
          slidesPerView: desktop,
          spaceBetween: desktopspace,
          loop: loop,
          autoplay: autoplay,
          speed: speed,
          grabCursor: true,
          a11y: false,
          navigation: {
              nextEl: swiperContainer.querySelector(".tab-swiper-button-next"),
              prevEl: swiperContainer.querySelector(".tab-swiper-button-prev")
          },
          pagination: {
              el: swiperContainer.querySelector(".tab-swiper-pagination"),
              clickable: true,
          },
          breakpoints: {
            320: {
                slidesPerView: mobile,
                spaceBetween: mobilespace
            },
            576: {
                slidesPerView: tablet,
                spaceBetween: mobilespace
            },
            841: {
                slidesPerView: largeTablet,
                spaceBetween: mobilespace
            },
            992: {
                slidesPerView: desktop,
                spaceBetween: desktopspace
            },
        },
      });

      TabcollectionSwipers.push(TabcollectionSwiper);
    }
  }

  // Initialize Tab collection Swiper on page load
  document.querySelectorAll('.tab-slider').forEach(function (swiperContainer) {
      initTabcollectionSwiper(swiperContainer);
  });

  document.addEventListener('shopify:section:select', function () {
      // Reinitialize Tab collection Swiper on section select
      TabcollectionSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      TabcollectionSwipers = [];
      document.querySelectorAll('.tab-slider').forEach(function (swiperContainer) {
          initTabcollectionSwiper(swiperContainer);
      });
  });

  document.addEventListener('shopify:section:deselect', function () {
      // Cleanup Tab collection Swiper on section deselect if necessary
      TabcollectionSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      TabcollectionSwipers = [];
  });
});

// special collection slider js

document.addEventListener('DOMContentLoaded', function () {
  var SpecialcollectionSwipers = [];

  function initSpecialcollectionSwiper(swiperContainer) {
      var enable = swiperContainer.dataset.enable;
      var desktopspace = swiperContainer.dataset.desktopspace;
      var mobilespace = swiperContainer.dataset.mobilespace;
      var desktop = swiperContainer.dataset.desktop;
      var largeTablet = swiperContainer.dataset.largetablet;
      var tablet = swiperContainer.dataset.tablet;
      var mobile = swiperContainer.dataset.mobile;
      var autoplay = swiperContainer.dataset.autoplay === "true";
      var loop = swiperContainer.dataset.loop === "true";
      var speed = swiperContainer.dataset.speed;

    if (enable) {
      var SpecialcollectionSwiper = new Swiper(swiperContainer, {
          slidesPerView: desktop,
          spaceBetween: desktopspace,
          loop: loop,
          autoplay: autoplay,
          speed: speed,
          grabCursor: true,
          a11y: false,
          navigation: {
              nextEl: swiperContainer.querySelector(".special-swiper-button-next"),
              prevEl: swiperContainer.querySelector(".special-swiper-button-prev")
          },
          pagination: {
              el: swiperContainer.querySelector(".special-swiper-pagination"),
              clickable: true,
          },
          breakpoints: {
            320: {
                slidesPerView: mobile,
                spaceBetween: mobilespace
            },
            576: {
                slidesPerView: tablet,
                spaceBetween: mobilespace
            },
            841: {
                slidesPerView: largeTablet,
                spaceBetween: mobilespace
            },
            992: {
                slidesPerView: desktop,
                spaceBetween: desktopspace
            },
        },
      });

      SpecialcollectionSwipers.push(SpecialcollectionSwiper);
    }
  }

  // Initialize Special collection Swiper on page load
  document.querySelectorAll('.special-slider').forEach(function (swiperContainer) {
      initSpecialcollectionSwiper(swiperContainer);
  });

  document.addEventListener('shopify:section:select', function () {
      // Reinitialize Special collection Swiper on section select
      SpecialcollectionSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      SpecialcollectionSwipers = [];
      document.querySelectorAll('.special-slider').forEach(function (swiperContainer) {
          initSpecialcollectionSwiper(swiperContainer);
      });
  });

  document.addEventListener('shopify:section:deselect', function () {
      // Cleanup Special collection Swiper on section deselect if necessary
      SpecialcollectionSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      SpecialcollectionSwipers = [];
  });
});

// Bestselling collection slider js

document.addEventListener('DOMContentLoaded', function () {
  var BestsellingcollectionSwipers = [];

  function initBestsellingcollectionSwiper(swiperContainer) {
      var enable = swiperContainer.dataset.enable;
      var desktopspace = swiperContainer.dataset.desktopspace;
      var mobilespace = swiperContainer.dataset.mobilespace;
      var desktop = swiperContainer.dataset.desktop;
      var largeTablet = swiperContainer.dataset.largetablet;
      var tablet = swiperContainer.dataset.tablet;
      var mobile = swiperContainer.dataset.mobile;
      var autoplay = swiperContainer.dataset.autoplay === "true";
      var loop = swiperContainer.dataset.loop === "true";
      var speed = swiperContainer.dataset.speed;

    if (enable) {
      var BestsellingcollectionSwiper = new Swiper(swiperContainer, {
          slidesPerView: desktop,
          spaceBetween: desktopspace,
          loop: loop,
          autoplay: autoplay,
          speed: speed,
          grabCursor: true,
          a11y: false,
          navigation: {
              nextEl: swiperContainer.querySelector(".bestselling-swiper-button-next"),
              prevEl: swiperContainer.querySelector(".bestselling-swiper-button-prev")
          },
          pagination: {
              el: swiperContainer.querySelector(".bestselling-swiper-pagination"),
              clickable: true,
          },
          breakpoints: {
            320: {
                slidesPerView: mobile,
                spaceBetween: mobilespace
            },
            576: {
                slidesPerView: tablet,
                spaceBetween: mobilespace
            },
            841: {
                slidesPerView: largeTablet,
                spaceBetween: mobilespace
            },
            992: {
                slidesPerView: desktop,
                spaceBetween: desktopspace
            },
        },
      });

      BestsellingcollectionSwipers.push(BestsellingcollectionSwiper);
    }
  }

  // Initialize Bestselling collection Swiper on page load
  document.querySelectorAll('.bestselling-slider').forEach(function (swiperContainer) {
      initBestsellingcollectionSwiper(swiperContainer);
  });

  document.addEventListener('shopify:section:select', function () {
      // Reinitialize Bestselling collection Swiper on section select
      BestsellingcollectionSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      BestsellingcollectionSwipers = [];
      document.querySelectorAll('.bestselling-slider').forEach(function (swiperContainer) {
          initBestsellingcollectionSwiper(swiperContainer);
      });
  });

  document.addEventListener('shopify:section:deselect', function () {
      // Cleanup Bestselling collection Swiper on section deselect if necessary
      BestsellingcollectionSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      BestsellingcollectionSwipers = [];
  });
});

// testimonial slider js

document.addEventListener('DOMContentLoaded', function () {
  var TestimonialSwipers = [];

  function initTestimonialSwiper(swiperContainer) {
      var desktop = swiperContainer.dataset.desktop;
      var tablet = swiperContainer.dataset.tablet;
      var mobile = swiperContainer.dataset.mobile;
      var autoplay = swiperContainer.dataset.autoplay === "true";
      var loop = swiperContainer.dataset.loop === "true";
      var speed = swiperContainer.dataset.speed;

      var TestimonialSwiper = new Swiper(swiperContainer, {
          slidesPerView: desktop,
          spaceBetween: 30,
          loop: loop,
          autoplay: autoplay,
          speed: speed,
          grabCursor: true,
          a11y: false,
          navigation: {
              nextEl: swiperContainer.querySelector(".testimonial-swiper-button-next"),
              prevEl: swiperContainer.querySelector(".testimonial-swiper-button-prev")
          },
          pagination: {
              el: swiperContainer.querySelector(".testimonial-swiper-pagination"),
              clickable: true,
          },
          breakpoints: {
            320: {
                slidesPerView: mobile,
                spaceBetween: 15
            },
            576: {
                slidesPerView: tablet,
                spaceBetween: 15
            },
            841: {
                slidesPerView: tablet,
                spaceBetween: 15
            },
            992: {
                slidesPerView: desktop,
                spaceBetween: 30
            },
        },
      });

      TestimonialSwipers.push(TestimonialSwiper);
  }

  // Initialize Testimonial collection Swiper on page load
  document.querySelectorAll('.testimonial-slider').forEach(function (swiperContainer) {
      initTestimonialSwiper(swiperContainer);
  });

  document.addEventListener('shopify:section:select', function () {
      // Reinitialize Testimonial collection Swiper on section select
      TestimonialSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      TestimonialSwipers = [];
      document.querySelectorAll('.testimonial-slider').forEach(function (swiperContainer) {
          initTestimonialSwiper(swiperContainer);
      });
  });

  document.addEventListener('shopify:section:deselect', function () {
      // Cleanup Testimonial collection Swiper on section deselect if necessary
      TestimonialSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      TestimonialSwipers = [];
  });
});

// shipping slider js

document.addEventListener('DOMContentLoaded', function () {
  var ShippingSwipers = [];

  function initShippingSwiper(swiperContainer) {
      var desktop = swiperContainer.dataset.desktop;
      var largetablet = swiperContainer.dataset.largetablet;
      var tablet = swiperContainer.dataset.tablet;
      var mobile = swiperContainer.dataset.mobile;
      var autoplay = swiperContainer.dataset.autoplay === "true";
      var loop = swiperContainer.dataset.loop === "true";
      var speed = swiperContainer.dataset.speed;

      var ShippingSwiper = new Swiper(swiperContainer, {
          slidesPerView: desktop,
          spaceBetween: 30,
          loop: loop,
          autoplay: autoplay,
          speed: speed,
          grabCursor: true,
          a11y: false,
          navigation: {
              nextEl: swiperContainer.querySelector(".shipping-swiper-button-next"),
              prevEl: swiperContainer.querySelector(".shipping-swiper-button-prev")
          },
          pagination: {
              el: swiperContainer.querySelector(".shipping-swiper-pagination"),
              clickable: true,
          },
          breakpoints: {
            320: {
                slidesPerView: mobile,
                spaceBetween: 15
            },
            480: {
                slidesPerView: tablet,
                spaceBetween: 15
            },
            841: {
                slidesPerView: largetablet,
                spaceBetween: 15
            },
            992: {
                slidesPerView: desktop,
                spaceBetween: 30
            },
        },
      });

      ShippingSwipers.push(ShippingSwiper);
  }

  // Initialize Shipping collection Swiper on page load
  document.querySelectorAll('.Shipping-inner-row').forEach(function (swiperContainer) {
      initShippingSwiper(swiperContainer);
  });

  document.addEventListener('shopify:section:select', function () {
      // Reinitialize Shipping collection Swiper on section select
      ShippingSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      ShippingSwipers = [];
      document.querySelectorAll('.Shipping-inner-row').forEach(function (swiperContainer) {
          initShippingSwiper(swiperContainer);
      });
  });

  document.addEventListener('shopify:section:deselect', function () {
      // Cleanup Shipping collection Swiper on section deselect if necessary
      ShippingSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      ShippingSwipers = [];
  });
});

// blog slider js

document.addEventListener('DOMContentLoaded', function () {
  var FeaturedblogSwipers = [];

  function initFeaturedblogSwiper(swiperContainer) {
      var desktopspace = swiperContainer.dataset.desktopspace;
      var mobilespace = swiperContainer.dataset.mobilespace;
      var desktop = swiperContainer.dataset.desktop;
      var largeTablet = swiperContainer.dataset.largetablet;
      var tablet = swiperContainer.dataset.tablet;
      var mobile = swiperContainer.dataset.mobile;
      var autoplay = swiperContainer.dataset.autoplay === "true";
      var loop = swiperContainer.dataset.loop === "true";
      var speed = swiperContainer.dataset.speed;
  
      var FeaturedblogSwiper = new Swiper(swiperContainer, {
          slidesPerView: desktop,
          spaceBetween: desktopspace,
          loop: loop,
          autoplay: autoplay,
          speed: speed,
          grabCursor: true,
          a11y: false,
          navigation: {
              nextEl: swiperContainer.querySelector(".blog-swiper-button-next"),
              prevEl: swiperContainer.querySelector(".blog-swiper-button-prev")
          },
          pagination: {
              el: swiperContainer.querySelector(".blog-swiper-pagination"),
              clickable: true,
          },
          breakpoints: {
            320: {
                slidesPerView: mobile,
                spaceBetween: mobilespace
            },
            576: {
                slidesPerView: tablet,
                spaceBetween: mobilespace
            },
            841: {
                slidesPerView: largeTablet,
                spaceBetween: mobilespace
            },
            992: {
                slidesPerView: desktop,
                spaceBetween: desktopspace
            },
        },
      });

    FeaturedblogSwipers.push(FeaturedblogSwiper);
  }

  // Initialize Featured blog Swiper on page load
  document.querySelectorAll('.blog-slider').forEach(function (swiperContainer) {
      initFeaturedblogSwiper(swiperContainer);
  });

  document.addEventListener('shopify:section:select', function () {
      // Reinitialize Featured blog Swiper on section select
      FeaturedblogSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      FeaturedblogSwipers = [];
      document.querySelectorAll('.blog-slider').forEach(function (swiperContainer) {
          initFeaturedblogSwiper(swiperContainer);
      });
  });

  document.addEventListener('shopify:section:deselect', function () {
      // Cleanup Featured blog Swiper on section deselect if necessary
      FeaturedblogSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      FeaturedblogSwipers = [];
  });
});

// brand slider js

document.addEventListener('DOMContentLoaded', function () {
  var BrandSwipers = [];

  function initBrandSwiper(swiperContainer) {
      var desktop = swiperContainer.dataset.desktop;
      var tablet = swiperContainer.dataset.tablet;
      var mobile = swiperContainer.dataset.mobile;
      var loop = swiperContainer.dataset.loop === "true";
      var speed = swiperContainer.dataset.speed;

      var BrandSwiper = new Swiper(swiperContainer, {
          slidesPerView: desktop,
          spaceBetween: 0,
          loop: loop,
          autoplay: {
            delay: 1,
            disableOnInteraction: true
          },
          speed: speed,
          grabCursor: true,
          a11y: false,
          navigation: {
              nextEl: swiperContainer.querySelector(".brand-swiper-button-next"),
              prevEl: swiperContainer.querySelector(".brand-swiper-button-prev")
          },
          pagination: {
              el: swiperContainer.querySelector(".brand-swiper-pagination"),
              clickable: true,
          },
          breakpoints: {
            320: {
                slidesPerView: mobile,
                spaceBetween: 15
            },
            576: {
                slidesPerView: tablet,
                spaceBetween: 15
            },
            841: {
                slidesPerView: tablet,
                spaceBetween: 15
            },
            992: {
                slidesPerView: desktop,
                spaceBetween: 0
            },
        },
      });

      BrandSwipers.push(BrandSwiper);
  }

  // Initialize Brand Swiper on page load
  document.querySelectorAll('.brand-slider').forEach(function (swiperContainer) {
      initBrandSwiper(swiperContainer);
  });

  document.addEventListener('shopify:section:select', function () {
      // Reinitialize Brand Swiper on section select
      BrandSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      BrandSwipers = [];
      document.querySelectorAll('.brand-slider').forEach(function (swiperContainer) {
          initBrandSwiper(swiperContainer);
      });
  });

  document.addEventListener('shopify:section:deselect', function () {
      // Cleanup Brand Swiper on section deselect if necessary
      BrandSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      BrandSwipers = [];
  });
});


// category collection 1 slider

document.addEventListener('DOMContentLoaded', function () {
  var categorycollectionstyle1Swipers = [];

  function initcategorycollectionstyle1Swiper(swiperContainer) {

      var desktop = swiperContainer.dataset.desktop;
      var largeTablet = swiperContainer.dataset.largetablet;
      var tablet = swiperContainer.dataset.tablet;
      var mobile = swiperContainer.dataset.mobile;
      var autoplay = swiperContainer.dataset.autoplay === "true";
      var loop = swiperContainer.dataset.loop === "true";
      var speed = swiperContainer.dataset.speed;

      var categorycollectionstyle1Swiper = new Swiper(swiperContainer, {
          slidesPerView: desktop,
          spaceBetween: 30,
          loop: loop,
          autoplay: autoplay,
          speed: speed,
          grabCursor: true,
          a11y: false,
          navigation: {
              nextEl: swiperContainer.querySelector(".category-swiper-button-next"),
              prevEl: swiperContainer.querySelector(".category-swiper-button-prev")
          },
          pagination: {
              el: swiperContainer.querySelector(".category-swiper-pagination"),
              clickable: true,
          },
          breakpoints: {
            320: {
                slidesPerView: mobile,
                spaceBetween: 15
            },
            480: {
                slidesPerView: tablet,
                spaceBetween: 15
            },
            576: {
                slidesPerView: tablet,
                spaceBetween: 15
            },
            640: {
                slidesPerView: tablet,
                spaceBetween: 15
            },
            768: {
                slidesPerView: largeTablet,
                spaceBetween: 15
            },
            992: {
                slidesPerView: largeTablet,
                spaceBetween: 30
            },
            1199: {
                slidesPerView: desktop
            },
        },
      });

    categorycollectionstyle1Swipers.push(categorycollectionstyle1Swiper);
  }

  // Initialize category collection Swiper on page load
  document.querySelectorAll('.main-collections-list-wrapper').forEach(function (swiperContainer) {
      initcategorycollectionstyle1Swiper(swiperContainer);
  });

  document.addEventListener('shopify:section:select', function () {
      // Reinitialize category collection style1 Swiper on section select
      categorycollectionstyle1Swipers.forEach(function (swiper) {
          swiper.destroy();
      });
      categorycollectionstyle1Swipers = [];
      document.querySelectorAll('.main-collections-list-wrapper').forEach(function (swiperContainer) {
          initcategorycollectionstyle1Swiper(swiperContainer);
      });
  });

  document.addEventListener('shopify:section:deselect', function () {
      // Cleanup category collection style1 Swiper on section deselect if necessary
      categorycollectionstyle1Swipers.forEach(function (swiper) {
          swiper.destroy();
      });
      categorycollectionstyle1Swipers = [];
  });
});

// multicolumn slider
document.addEventListener('DOMContentLoaded', function () {
  var MulticolumnSwipers = [];

  function initmulticolumnSwiper(swiperContainer) {
      var desktop = swiperContainer.dataset.desktop;
      var largeTablet = swiperContainer.dataset.largetablet;
      var tablet = swiperContainer.dataset.tablet;
      var mobile = swiperContainer.dataset.mobile;
      var autoplay = swiperContainer.dataset.autoplay === "true";
      var loop = swiperContainer.dataset.loop === "true";
      var speed = swiperContainer.dataset.speed;

      var MulticolumnSwiper = new Swiper(swiperContainer, {
          slidesPerView: desktop,
          spaceBetween: 30,
          loop: loop,
          autoplay: autoplay,
          speed: speed,
          grabCursor: true,
          a11y: false,
          navigation: {
              nextEl: swiperContainer.querySelector(".multicolumn-swiper-button-next"),
              prevEl: swiperContainer.querySelector(".multicolumn-swiper-button-prev")
          },
          pagination: {
              el: swiperContainer.querySelector(".multicolumn-swiper-pagination"),
              clickable: true,
          },
          breakpoints: {
            320: {
                slidesPerView: mobile,
                spaceBetween: 15
            },
            576: {
                slidesPerView: tablet,
                spaceBetween: 15
            },
            841: {
                slidesPerView: largeTablet,
                spaceBetween: 15
            },
            992: {
                slidesPerView: desktop,
                spaceBetween: 30
            },
        },
      });

    MulticolumnSwipers.push(MulticolumnSwiper);
  }

  // Initialize Multicolumn Swiper on page load
  document.querySelectorAll('.multicolumn-slider').forEach(function (swiperContainer) {
      initmulticolumnSwiper(swiperContainer);
  });

  document.addEventListener('shopify:section:select', function () {
      // Reinitialize Multicolumn Swiper on section select
      MulticolumnSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      MulticolumnSwipers = [];
      document.querySelectorAll('.multicolumn-slider').forEach(function (swiperContainer) {
          initmulticolumnSwiper(swiperContainer);
      });
  });

  document.addEventListener('shopify:section:deselect', function () {
      // Cleanup Multicolumn Swiper on section deselect if necessary
      MulticolumnSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      MulticolumnSwipers = [];
  });
});

// instagram slider
document.addEventListener('DOMContentLoaded', function () {
  var InstagramSwipers = [];

  function initInstagramSwiper(swiperContainer) {
      var enable = swiperContainer.dataset.enable === "true";
      var desktop = swiperContainer.dataset.desktop;
      var largeTablet = swiperContainer.dataset.largetablet;
      var tablet = swiperContainer.dataset.tablet;
      var mobile = swiperContainer.dataset.mobile;
      var autoplay = swiperContainer.dataset.autoplay === "true";
      var loop = swiperContainer.dataset.loop === "true";
      var speed = swiperContainer.dataset.speed;

    if (enable) {
      var InstagramSwiper = new Swiper(swiperContainer, {
          slidesPerView: desktop,
          spaceBetween: 30,
          loop: loop,
          autoplay: autoplay,
          speed: speed,
          grabCursor: true,
          a11y: false,
          navigation: {
              nextEl: swiperContainer.querySelector(".instagram-swiper-button-next"),
              prevEl: swiperContainer.querySelector(".instagram-swiper-button-prev")
          },
          pagination: {
              el: swiperContainer.querySelector(".instagram-swiper-pagination"),
              clickable: true,
          },
          breakpoints: {
            320: {
                slidesPerView: mobile,
                spaceBetween: 15
            },
            576: {
                slidesPerView: tablet,
                spaceBetween: 15
            },
            841: {
                slidesPerView: largeTablet,
                spaceBetween: 15
            },
            992: {
                slidesPerView: desktop,
                spaceBetween: 30
            },
        },
      });

      InstagramSwipers.push(InstagramSwiper);
    }
  }

  // Initialize Instagram Swiper on page load
  document.querySelectorAll('.main-instagram-post-section-wrapper').forEach(function (swiperContainer) {
      initInstagramSwiper(swiperContainer);
  });

  document.addEventListener('shopify:section:select', function () {
      // Reinitialize Instagram Swiper on section select
      InstagramSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      InstagramSwipers = [];
      document.querySelectorAll('.main-instagram-post-section-wrapper').forEach(function (swiperContainer) {
          initInstagramSwiper(swiperContainer);
      });
  });

  document.addEventListener('shopify:section:deselect', function () {
      // Cleanup Instagram Swiper on section deselect if necessary
      InstagramSwipers.forEach(function (swiper) {
          swiper.destroy();
      });
      InstagramSwipers = [];
  });
});

// hero slideshow style2 slider

document.addEventListener('DOMContentLoaded', function () {
  var heroslider2Swipers = [];

  function initheroslider2Swiper(swiperContainer) {
      var autoplay = swiperContainer.dataset.autoplay === "true";
      var loop = swiperContainer.dataset.loop === "true";
      var speed = swiperContainer.dataset.speed;
    
      var heroslider2Swiper = new Swiper(swiperContainer, {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: loop,
          autoplay: autoplay,
          speed: speed,
          grabCursor: true,
          a11y: false,
          navigation: {
              nextEl: swiperContainer.querySelector(".slider2-swiper-button-next"),
              prevEl: swiperContainer.querySelector(".slider2-swiper-button-prev")
          },
          pagination: {
              el: swiperContainer.querySelector(".slider2-swiper-pagination"),
              clickable: true,
          },
          breakpoints: {
            320: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            841: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 1
            },
        },
      });
  
      heroslider2Swipers.push(heroslider2Swiper);
  }

  // Initialize Hero slider 2 Swiper on page load
  document.querySelectorAll('.swiper-container-gudget').forEach(function (swiperContainer) {
      initheroslider2Swiper(swiperContainer);
  });

  document.addEventListener('shopify:section:select', function () {
      // Reinitialize Hero slider 2 Swiper on section select
      heroslider2Swipers.forEach(function (swiper) {
          swiper.destroy();
      });
      heroslider2Swipers = [];
      document.querySelectorAll('.swiper-container-gudget').forEach(function (swiperContainer) {
          initheroslider2Swiper(swiperContainer);
      });
  });

  document.addEventListener('shopify:section:deselect', function () {
      // Cleanup Hero slider 2 Swiper on section deselect if necessary
      heroslider2Swipers.forEach(function (swiper) {
          swiper.destroy();
      });
      heroslider2Swipers = [];
  });
});