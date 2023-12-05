AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Loan Against Property",
    cardImage: "/a.png",
    description: "A loan against property(LAP) is a secured loan that is sanctioned against the asset pledged as collateral. This asset can either be an owned land, a house, or any other commercial premises. The asset remains as collateral with the lender until the entire loan against property amount is repaid.",
    tagimg: "a.png",
    Previewlink: "propertyloan.html",
    Githublink: "",
  },
  {
    title: "Home Loan",
    cardImage: "/b.png",
    description: "A home loan is a secured loan that is obtained to purchase a property by offering it as collateral. Home loans offer high-value funding at economical interest rates and for long tenors. They are repaid through EMIs. After repayment, the property's title is transferred back to the borrower.",
    tagimg: "",
    Previewlink: "homeloan.html",
    Githublink: "",
  },
  {
    title: "Education Loan",
    cardImage: "/c.jpg",
    description: "An education loan is a sum of money borrowed to finance post-secondary education or higher education-related expenses. Education loans are intended to cover the cost of tuition, books and supplies, and living expenses while the borrower is in the process of pursuing a degree.",
    tagimg: "",
    Previewlink: "educationloan.html",
    Githublink: "",
  },
  
];

// function for rendering project cards data
// ...

// ...

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description, Previewlink, Githublink }) => {
    output += `       
        <a href="${Previewlink}" target="">
          <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600">
            <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
              <div class="header"></div>
              <div class="data">
                <div class="content">
                  <div class="title-div">
                    <h1 class="title">${title}</h1>
                    <h6 class="description">${description}</h6>
                  </div>
                  <ul class="menu-content"><br>
                    <!-- Your existing code for links -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </a>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// ...

// ...


// ...


function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
