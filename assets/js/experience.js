AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Pravin Patil",
    cardImage: "assets/images/favicon.png",
    place: "- Sangli",
    time: "",
    desp: "<p>very good service provided by Askgrow team, i get good experiance, Askgrow team work like family members and help in all conditions.</p>",
  },
  {
    title: "Yogeshwari Enterprises",
    cardImage: "assets/images/favicon.png",
    place: "Pune",
    time: "",
    desp: "<p>First they understood my financial need and they act as own requirement and try to fullfill all requirement as per situations. Thanks for your excellent service</p>",
  },
  {
    title: "Prakash Jadhav",
    cardImage: "assets/images/favicon.png",
    place: "",
    time: "",
    desp: "<p>AskGrow Finserv pvt ltd is a professional & knowledgable finance person who firstly understand your needs & then he suggest right loan options. He is providing very efficient, co-operative & quick loan service to customers. I will 100% recommend them, as i got my required loan amount within 15-20 Days.</p>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

