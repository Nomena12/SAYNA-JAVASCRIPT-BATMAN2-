 /*  if(a < 21){
        a+=1;

    const img = document.querySelector('img[alt="Batgame3"]');
    img.setAttribute("src",`Illustrations/Batgame_${a}.png`);
    }else{a = 21} ; */

    //let n = 6;
      //  const para = document.querySelector(".down");
      //  div.textContent = n;

//let a = 3;



window.addEventListener('scroll', (e)=>{
    const aside = document.querySelector(".aside");
   

   aside.style.position = "sticky";
   aside.style.top = 160 + "px";
   aside.style.left = 2500 + "px";
   

});


let n = 1 ;
let totQuest = 15;
        
            const btn = document.querySelector("button");
            btn.addEventListener("click",()=>{
                
                
  

    const box = document.querySelector(".out");
    const box1 = document.querySelector(".out1");
    box.style.display = "none";
    box1.style.display = "block";

    if(n < 15){
n += 1
     const para = document.querySelector(".down");
     para.textContent = n +`/${totQuest}`;}else{n = 15}
 
    

    
    
        });

       

      

        