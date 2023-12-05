AOS.init();

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/travel/trip1/pune.jpg",
    langName: "PUNE",
    langDesc: "<li> Registered Office: Tanish Orchid Phase 2, Charoli bk Pune- 412105 <li>Corporate Office: 1st Floor Chavan Niwas, Aundh-Ravet BRT Road,<br>Jagtap Dairy, Pune - 411027 <br>Phone: +91-9823939396</li>",
  },
  {
    langImage: "assets/images/travel/trip1/sangli.jpg",
    langName: "Sangli",
    langDesc: "<li>Address<br>Phone no.</li>",
  },
  {
    langImage: "assets/images/travel/trip1/kolhapur.jpg",
    langName: "Kolhapur",
    langDesc: "<li>Address <br> Phone no.</li>",
  },
  {
    langImage: "assets/images/travel/trip1/pandharpur.jpg",
    langName: "Pandharpur",
    langDesc: "<li>Address <br> Phone no.</li>",
  }];

const displayTechStacksCards = () => {
  const entireCardTemplate = techStack.map((stack) => `
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                    ${stack.langDesc}
                </ul>
            </div>
        </div>
    </div>`
  ).join('');
  
  techStackCards.innerHTML = entireCardTemplate;
};

document.addEventListener("DOMContentLoaded", displayTechStacksCards);
