/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1 : "Datta Deshmukh",
        designation1 : "Director",
        image1 : "assets/images/travel/trip1/1.png",
        message1 : "A Management graduate brings with him more than 15+ years of work experience in building Retail Asset Lending portfolios.Recently held position as Regional Sales manager, His prior experience has been with SKS Microfinance Pvt Ltd, Suryoday Small Finance Bank Ltd, Altum Credo home finance Pvt. Ltd and Bizloan Pvt. Ltd.",
        

        sl2:2,
        name2 : "Vijay Mali",
        designation2 : "Director", 
        image2: "assets/images/travel/trip1/2.png",
        message2 : "Vijay has over 10 years experience as a mortgage underwriter for Housing / LAP and Construction Finance. He has extensive experience in Policy Implementation, Application Software roll-out, managing teams and building a profitable P&L portfolio maintaining productivity and quality. He previously worked with Altum Credo Home Finance and Agrim Housing Finance.",
        
        
    },

    

    {
        sl1:3,
        name1 : "Swapnil Patil",
        designation1 : "Business owner",
        image1 : "assets/images/travel/trip1/3.png",
        message1 : "Mr. Swapnil has over 10 years’ experience as a mortgage loan in Housing / LAP and Construction Finance. He has extensive experience in managing teams and building a profitable P&L portfolio maintaining productivity and quality. He previously worked with India Shelter, Altum Credo Home Finance and Centram Housing Finance.",
        
        

        sl2:4,
        name2 : "Vipul Vadhiya",
        designation2 : "Mentor",
        image2 : "assets/images/travel/trip1/4.png",
        message2 : "Astute banker with more than 15 years of experience in retail banking , wealth management, technology and retail assets . Strong business acumen to spot challenges and converting them into business opportunities Passionate and result orientated individual",
         },
   
   {sl1:5,
    name1 : "Mahendra Deshpande",
    designation1 : "Mentor",
    image1 : "assets/images/travel/trip1/5.jpg",
    message1 : "Has deep knowledge about Corporate Law compliance's, IPR consulting, Due-Diligence, Business organizations. 10+ yrs Experience in Banking and NBFC sector Running two ventures of financial consultancy.Expert in project loans and SMEG loans",
}
  
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      
      sl2,
      image2,
      name2,
      designation2,
      message2,
      
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
