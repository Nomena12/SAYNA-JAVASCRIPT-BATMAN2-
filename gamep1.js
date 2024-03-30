 /*  if(a < 21){
        a+=1;

    const img = document.querySelector('img[alt="Batgame3"]');
    img.setAttribute("src",`Illustrations/Batgame_${a}.png`);
    }else{a = 21} ; 
    
    for (let x = 0; x < 15; x++) {
                for (let y = 0; y < 3; y++) {
                    const cocher = document.querySelector(`.out${x} .inckeck${y} input`);
                    if (cocher){
                        const ans1 = document.querySelector(`.out${x} .incheck${y} label`);
                        const valid = quiz.fanontaniana[x].reponses[y].isGood;
                        if(valid === true){
                            score += 1;

                        };
                        

                    };
                    
                    
                };
                
            };

    */

    //let n = 6;
      //  const para = document.querySelector(".down");
      //  div.textContent = n;

//let a = 3;
 // const label = document.querySelector(".out .incheck1 label");
       // label.textContent = quiz.fanontaniana[0].reponses[0].text;




window.addEventListener('scroll', (e)=>{
    const aside = document.querySelector(".aside");
   

   aside.style.position = "sticky";
   aside.style.top = 160 + "px";
   aside.style.left = 2500 + "px";
   

});


$(document).ready(function(){
    $.ajax({
        url : "https://nomena12.github.io/test2.json",
        datatype : "json",
        success : function(quiz){
         const totalQuiz = quiz.fanontaniana.length;
         
         

          for  (let a = 0; a < 15 ; a++){
            for (let b = 0; b < quiz.fanontaniana[a].reponses.length; b++) {
                const ans = document.querySelector(`.out${a} .incheck${b} label`);
                ans.textContent = quiz.fanontaniana[a].reponses[b].text;
                
            };

            
            

            const out1 = document.querySelector(`.out${a} div h2`);
            out1.textContent = quiz.fanontaniana[a].questions;


            
            
        };
        
        const btn = document.querySelector("button");
        btn.addEventListener("click",()=>{
            
                for (let x = 0; x < quiz.fanontaniana[m].reponses.length; x++) {
                  const divout = document.querySelector(`.incheck${x} input[type="checkbox"]`);
                  if(divout.checked === true){
                    const valid = quiz.fanontaniana[m].reponses[x].isGood;
                    if(valid === true){
                        score +=1;
                        console.log(score);

                    };

                  };
                  
                  
                    
                }
                
            

            

            
            
       



const box = document.querySelector(".out0");
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

                            btn.addEventListener("click",()=>{
                                const box6 = document.querySelector(".out6");
                                const box7 = document.querySelector(".out7");
                                box6.style.display = "none";
                                box7.style.display = "block";

                                btn.addEventListener("click",()=>{
                                    const box7 = document.querySelector(".out7");
                                    const box8 = document.querySelector(".out8");
                                    box7.style.display = "none";
                                    box8.style.display = "block";

                                    btn.addEventListener("click",()=>{
                                        const box8 = document.querySelector(".out8");
                                        const box9 = document.querySelector(".out9");
                                        box8.style.display = "none";
                                        box9.style.display = "block"; 


                                        btn.addEventListener("click",()=>{
                                            const box9 = document.querySelector(".out9");
                                            const box10 = document.querySelector(".out10");
                                            box9.style.display = "none";
                                            box10.style.display = "block"; 

                                            btn.addEventListener("click",()=>{
                                                const box10 = document.querySelector(".out10");
                                                const box11 = document.querySelector(".out11");
                                                box10.style.display = "none";
                                                box11.style.display = "block";

                                                btn.addEventListener("click",()=>{
                                                    const box11 = document.querySelector(".out11");
                                                    const box12 = document.querySelector(".out12");
                                                    box11.style.display = "none";
                                                    box12.style.display = "block"; 

                                                    btn.addEventListener("click",()=>{
                                                        const box12 = document.querySelector(".out12");
                                                        const box13 = document.querySelector(".out13");
                                                        box12.style.display = "none";
                                                        box13.style.display = "block";

                                                        btn.addEventListener("click",()=>{
                                                            const box13 = document.querySelector(".out13");
                                                            const box14 = document.querySelector(".out14");
                                                            box13.style.display = "none";
                                                            box14.style.display = "block"; 
                                                        
                                                        });
                                                        
                                                        
                                                    
                                                    });




                                                
                                                });
                                                
                                                

                                            
                                            });
                                        
                                        });
                                    
                                    
                                    });
                                
                                
                                });

                                
                            });

                        });
                        

                    });

                });

            });
        });

if(n < 15){
n += 1
 const para = document.querySelector(".down");
 para.textContent = n +`/${totQuest}`;}else{n = 15}

if(m < 15){
    m += 1;
}



    });


        },
        error : function(){
            console.log("misy blem");
        }

    })
});





let m = 0 ;
let n = 1 ;
let totQuest = 15;
let score = 0;
let total = `${score}/15`;
        
       /*     const btn = document.querySelector("button");
            btn.addEventListener("click",()=>{

                

                
                
           

  

    const box = document.querySelector(".out0");
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

                                btn.addEventListener("click",()=>{
                                    const box6 = document.querySelector(".out6");
                                    const box7 = document.querySelector(".out7");
                                    box6.style.display = "none";
                                    box7.style.display = "block";

                                    btn.addEventListener("click",()=>{
                                        const box7 = document.querySelector(".out7");
                                        const box8 = document.querySelector(".out8");
                                        box7.style.display = "none";
                                        box8.style.display = "block";

                                        btn.addEventListener("click",()=>{
                                            const box8 = document.querySelector(".out8");
                                            const box9 = document.querySelector(".out9");
                                            box8.style.display = "none";
                                            box9.style.display = "block"; 


                                            btn.addEventListener("click",()=>{
                                                const box9 = document.querySelector(".out9");
                                                const box10 = document.querySelector(".out10");
                                                box9.style.display = "none";
                                                box10.style.display = "block"; 

                                                btn.addEventListener("click",()=>{
                                                    const box10 = document.querySelector(".out10");
                                                    const box11 = document.querySelector(".out11");
                                                    box10.style.display = "none";
                                                    box11.style.display = "block";

                                                    btn.addEventListener("click",()=>{
                                                        const box11 = document.querySelector(".out11");
                                                        const box12 = document.querySelector(".out12");
                                                        box11.style.display = "none";
                                                        box12.style.display = "block"; 

                                                        btn.addEventListener("click",()=>{
                                                            const box12 = document.querySelector(".out12");
                                                            const box13 = document.querySelector(".out13");
                                                            box12.style.display = "none";
                                                            box13.style.display = "block";

                                                            btn.addEventListener("click",()=>{
                                                                const box13 = document.querySelector(".out13");
                                                                const box14 = document.querySelector(".out14");
                                                                box13.style.display = "none";
                                                                box14.style.display = "block"; 
                                                            
                                                            });
                                                            
                                                            
                                                        
                                                        });
    



                                                    
                                                    });
                                                    
                                                    

                                                
                                                });
                                            
                                            });
                                        
                                        
                                        });
                                    
                                    
                                    });

                                    
                                });

                            });
                            

                        });

                    });

                });
            });

    if(n < 15){
n += 1
     const para = document.querySelector(".down");
     para.textContent = n +`/${totQuest}`;}else{n = 15}
 
    

    
    
        }); */

console.log(total);
