let sectionTable = [document.querySelector("#nav2-programmes"),  document.querySelector("#nav2-notes"),  document.querySelector("#nav2-livres"),  document.querySelector("#nav2-logiciels"),  document.querySelector("#nav2-profs")];
let sectionOuverte;
let sectionTable2 = [document.querySelector("#nav-programmes"),  document.querySelector("#nav-notes"),  document.querySelector("#nav-livres"),  document.querySelector("#nav-logiciels"),  document.querySelector("#nav-profs")];
let nav1 = document.querySelector("#nav");
let languette = document.querySelector("#menu-burger");
let active = false;
let nav2 = document.querySelector(".nav2");
sectionTable[0].style.bottom = "20rem";
    sectionTable[1].style.bottom = "20rem";
    sectionTable[2].style.bottom = "20rem";
    sectionTable[3].style.bottom = "20rem";
    sectionTable[4].style.bottom = "20rem";
setTimeout(apparition(), 600)

function apparition(){
    
    sectionTable[0].style.display = "flex";
    sectionTable[1].style.display = "flex";
    sectionTable[2].style.display = "flex";
    sectionTable[3].style.display = "flex";
    sectionTable[4].style.display = "flex";
}






function bougerMenuUn(){
    if(window.outerWidth >=993){
        if(active == false){
            nav1.style.bottom = "0";
            active = true;
        }else{
            nav1.style.bottom = "3rem";
            active = false;
            for(i = 0; i < 5; i++){
                sectionTable[i].style.bottom = "5rem";
                languette.style.bottom = "0rem";
            }
        }
    } 
    if(window.outerWidth <= 992){
        if(active == false){
            nav1.style.bottom = "0rem";
            active = true;
            sectionTable[0, 4].style.display = "flex";
        }else{
            nav1.style.bottom = "16.5rem";
            active = false;
            for(i = 0; i < 5; i++){
                sectionTable[i].style.bottom = "20rem";
                languette.style.bottom = "0rem";
            }
        }
    }
}

function bougerMenu(section){
    if(window.outerWidth >=993){

        for(i = 0; i < 5; i++){
            sectionTable[i].style.bottom = "4rem";
            languette.style.bottom = "0rem";
        }
        if(section != sectionOuverte){
            sectionTable[section].style.bottom = "-2rem";
            sectionTable[section].style.display = "flex";
            languette.style.bottom = "-5.1rem";
            sectionOuverte = section;
        }else{
            sectionOuverte = -1;
        }
    }
    if(window.outerWidth <= 992){

        for(i2 = 0; i2 < 5; i2++){
            sectionTable[i2].style.bottom = "20rem";
            languette.style.bottom = "0rem";
        }
        
        if(section != sectionOuverte){
            sectionTable[section].style.bottom = "-2rem";
            sectionTable[section].style.display = "flex";
            languette.style.bottom = "-5rem";
            sectionOuverte = section;
        }else{
            sectionOuverte = -1;
        }
    }
}