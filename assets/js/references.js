const referenceTable = document.querySelector(".pain");

const references = [
  {
    name: "Datta Deshmukh",
    designation: "Director",
    image: "assets/images/travel/trip1/1.png",
    message: "A Management graduate brings with him more than 15+ years of work experience in building Retail Asset Lending portfolios. Recently held position as Regional Sales manager, His prior experience has been with SKS Microfinance Pvt Ltd, Suryoday Small Finance Bank Ltd, Altum Credo home finance Pvt. Ltd."
  },
  {
    name: "Vijay Mali",
    designation: "Director",
    image: "assets/images/travel/trip1/2.png",
    message: "Vijay has over 10 years experience as a mortgage underwriter for Housing / LAP and Construction Finance. He has extensive experience in Policy Implementation, Application Software roll-out, managing teams and building a profitable P&L portfolio maintaining productivity and quality. He previously worked with Altum Credo Home Finance and Agrim Housing Finance."
  },
  {
    name: "Swapnil Patil",
    designation: "Business owner",
    image: "assets/images/travel/trip1/3.png",
    message: "Mr. Swapnil has over 10 years’ experience as a mortgage loan in Housing / LAP and Construction Finance. He has extensive experience in managing teams and building a profitable P&L portfolio maintaining productivity and quality. He previously worked with India Shelter, Altum Credo Home Finance and Centram Housing Finance."
  },
  {
    name: "Vipul Vadhiya",
    designation: "Mentor",
    image: "assets/images/travel/trip1/4.png",
    message: "Astute banker with more than 15 years of experience in retail banking, wealth management, technology and retail assets. Strong business acumen to spot challenges and converting them into business opportunities. Passionate and result-orientated individual."
  },
  {
    name: "Mahendra Deshpande",
    designation: "Mentor",
    image: "assets/images/travel/trip1/5.jpg",
    message: "Has deep knowledge about Corporate Law compliance's, IPR consulting, Due-Diligence, Business organizations. 10+ yrs Experience in Banking and NBFC sector. Running two ventures of financial consultancy. Expert in project loans and SMEG loans."
  }
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach((person, index) => {
    const isLeft = index % 2 === 0;
    const imageCol = `<td class="imgCol"><img src="${person.image}" class="rImg"></td>`;
    const contentCol = `
      <td class="referenceTitleName">
        <div>
          <span class="imgResponsive">
            <img src="${person.image}" class="imgRes">
          </span>
        </div>
        <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
        <a href="#0" class="paperTitle">${person.name}</a>
        <div>${person.designation}</div>
        <div class="rConferences">${person.message}</div>
      </td>`;

    if (isLeft) {
      output += `<tr data-aos="zoom-in-left">${imageCol}${contentCol}</tr>`;
    } else {
      output += `<tr data-aos="zoom-in-right">${contentCol}${imageCol}</tr>`;
    }
  });

  referenceTable.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", fillData);
