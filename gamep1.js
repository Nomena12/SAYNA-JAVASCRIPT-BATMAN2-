window.addEventListener('scroll', (e)=>{
    const aside = document.querySelector(".aside");
   

   aside.style.position = "sticky";
   aside.style.top = 160 + "px";
   aside.style.left = 2500 + "px";
   

});

let a = 3;


        
            const btn = document.querySelector("button");
            btn.addEventListener("click",()=>{
    if(a < 21){
        a+=1;

    const img = document.querySelector('img[alt="Batgame3"]');
    img.setAttribute("src",`Illustrations/Batgame_${a}.png`);
    }else{a = 21}                       
        });

