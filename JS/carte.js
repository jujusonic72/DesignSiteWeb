let actif = false;
let carte = document.querySelector("#carte");
function  Apparaitre(){
    if(actif == false){
        actif = true;
        carte.style.display = "block";
    }else if(actif == true){
        actif = false;
        carte.style.display = "none";
    }
}