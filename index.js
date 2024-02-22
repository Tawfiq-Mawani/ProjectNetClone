const langaugeSelector=document.querySelector(".select-lang");
const toFrenchTexts=document.querySelectorAll("[data-Francais]")
const listItemPart1=document.querySelectorAll(".list-item-part-1");
const listItemPart2=document.querySelectorAll(".list-item-part-2");
const signBtn=document.querySelector(".sign-btn");


alert("This is a Clone Website Made Simply For Educational Purposes ONLY");
alert("NO INFORMTION IS COLLECTED");

langaugeSelector.addEventListener("change", (event)=>{
    const selectedLanguage=event.target.value;
    toggleLangauge(selectedLanguage);
})


function toggleLangauge(lang){

    if(lang=="Francais"){
        toFrenchTexts.forEach((element)=>{
           const frenchText= element.getAttribute("data-francais");
           element.innerHTML=frenchText;

           signBtn.style.width="140px"
        })
    }
    else{
        window.location.reload();
    }


}

listItemPart1.forEach(function(item){
    item.addEventListener("click",(e)=>{

        let item_selected=e.target;
        item_selected.nextElementSibling.classList.toggle("hidden");
        item_selected.parentNode.lastElementChild.classList.toggle("fa-xmark");
    })
})