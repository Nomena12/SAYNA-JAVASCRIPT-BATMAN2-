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


            btn.addEventListener("click",()=>{
                const box1 = document.querySelector(".out1");
                const box2 = document.querySelector(".out2");
                box1.style.display = "none";
                box2.style.display = "block";


                btn.addEventListener("click",()=>{
                    const box2 = document.querySelector(".out2");
                    const box3 = document.querySelector(".out3");
                    box2.style.display = "none";
                    box3.style.display = "block";

                    btn.addEventListener("click",()=>{
                        const box3 = document.querySelector(".out3");
                        const box4 = document.querySelector(".out4");
                        box3.style.display = "none";
                        box4.style.display = "block";

                        btn.addEventListener("click",()=>{
                            const box4 = document.querySelector(".out4");
                            const box5 = document.querySelector(".out5");
                            box4.style.display = "none";
                            box5.style.display = "block";

                            btn.addEventListener("click",()=>{
                                const box5 = document.querySelector(".out5");
                                const box6 = document.querySelector(".out6");
                                box5.style.display = "none";
                                box6.style.display = "block";

                            });
                            

                        });

                    });

                });
            });

    if(n < 15){
n += 1
     const para = document.querySelector(".down");
     para.textContent = n +`/${totQuest}`;}else{n = 15}
 
    

    
    
        });

       

      

        