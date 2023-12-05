$(document).ready(function () {
  AOS.init();
  const eventswiper = document.querySelector(".swiper-wrapper");
  const event = [
    {
      title: "Business Manager",
      description: "Fresher / Experienced",
      image: "/bm.jpg",
    },
    {
      title: "Credit Manager",
      description: "Fresher / Experienced",
      image: "/cm.jpg",
    },
    {
      title: "Sales Manager",
      description: "Fresher / Experienced",
      image: "/sm.jpg",
    },
    {
      title: "Relationship Manager",
      description: "Fresher / Experienced",
      image: "/rm.jpg",
    },
  ];

  function fillData() {
    let output = "";
    for (let x = 0; x < event.length; x++) {
      output += `
        <div class="swiper-slide">
          <div class="img-container">
            <img src=${event[x].image} alt="" class="img-fluid" />
          </div>
          <div class="container arrow_contain">
            <div class="row justify-content-center">
              <div class="col-md-8">
                <div class="wrapper">
                  <div class="content">
                    <div class="title">
                      <div class="text-wrapper">
                        <div class="text-inner">
                          <h2>${event[x].title}</h2>
                          <h6><p>${event[x].description}</p></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    }
    eventswiper.innerHTML = output;
  }

  document.addEventListener("DOMContentLoaded", fillData());

  const parallaxSliderOptions = {
    speed: 1000,
    effect: "coverflow",
    autoplay: false,
    parallax: true,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 30,
      depth: 20,
      stretch: 0,
      modifier: 1,
      slideShadows: true,
    },
    on: {
      init: function () {
        const swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          $(swiper.slides[i])
            .find(".img-container")
            .attr({
              "data-swiper-parallax": 0.75 * swiper.width,
              "data-swiper-paralalx-opacity": 0.5,
            });
        }
        const index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
      },
      transitionEnd: function () {
        const swiper = this;
        const index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
      },
      resize: function () {
        this.update();
      },
    },
    navigation: {
      nextEl: ".image-slider .next-ctrl",
      prevEl: ".image-slider .prev-ctrl",
    },
  };

  const slider = new Swiper(".image-slider", parallaxSliderOptions);
});
