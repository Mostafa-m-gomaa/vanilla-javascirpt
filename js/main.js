let mColor=localStorage.getItem("mainColor");
console.log(mColor)
if(mColor !== null){
    document.documentElement.style.setProperty('--main',localStorage.getItem("mainColor"));
    document.querySelectorAll(".settings .colors li").forEach((el)=>{
        el.classList.remove("active");
        if(el.dataset.color === mColor){
        el.classList.add("active")
        }
      
    });
}



// catch landing page 

// end of auto back grounds 
// coding settings box 
let sBox=document.querySelector(".settings")
let sButton=document.querySelector(" .settings .i-set")


sButton.onclick=()=>{
sBox.classList.toggle("open");
document.querySelector(".settings i").classList.toggle("fa-spin")
}
// coding color customization 

// coding if user want random back grounds
// function that randomize back ground 
let landing =document.querySelector(".landing")
let imgArr=["#1abc9c","#2ecc71","#3498db","#f1c40f","#34495e"]
let i=0;
let inty
let cond =false;
function randomization(){
    if(cond === true){
         inty= setInterval(()=>{
                if(i>=imgArr.length){
                    i=0
                }
                landing.style.backgroundColor=imgArr[i];
                document.documentElement.style.setProperty('--main',imgArr[i]);
                document.querySelectorAll(".settings .colors li").forEach((el)=>{
                    el.classList.remove("active");
                    if(el.dataset.color === imgArr[i]){
                    el.classList.add("active")
                    }
                  
                });
                
                i++;
            },2000)}
    }
    // end of randomize function 
  
let randButton =document.querySelector(".random-back div span");
randButton.onclick=()=>{
    
    randButton.classList.toggle("yes")
    document.querySelector(".random-back div").classList.toggle("ya");
    if (randButton.classList.contains("yes")){
        cond=true
        randomization()
    }
    else{
        cond=false
        clearInterval(inty)
    }
    

// array of images 

}

let clrs=document.querySelectorAll(".settings .colors li");

clrs.forEach((li)=>{
li.addEventListener("click",(e)=>{
clrs.forEach((li)=>{
    li.classList.remove("active")
})
e.currentTarget.classList.add("active")
document.documentElement.style.setProperty('--main',e.currentTarget.dataset.color);
localStorage.setItem("mainColor",e.currentTarget.dataset.color)
})
})
//////////////////////////////////////////////////////////
// codng our skills counter 
let skillsSpan =document.querySelectorAll(".our-skills span")
window.onscroll=()=>{
    if( scrollY >= document.querySelector(".our-skills").offsetTop){
        console.log("hello")
        skillsSpan.forEach((sp)=>{
            sp.style.width=sp.dataset.width
        })
    }
    else{
        skillsSpan.forEach((sp)=>{
            sp.style.width=0
        })
    }
}
// start gallery section

let galImg=document.querySelectorAll(".gallery .images img")
galImg.forEach(im=>{
    im.addEventListener("click",(e)=>{
        console.log(e.currentTarget.dataset.text)
        let box=document.createElement("div")
        let im=document.createElement("img")
        let sp=document.createElement("span")
        sp.className="hi"
        // sp.onclick=()=>{
        //     box.remove()
        // }
        box.appendChild(sp)
        im.src=e.currentTarget.src
        box.className="box"
        let text=document.createTextNode(e.currentTarget.dataset.text)
        box.appendChild(text)
        box.appendChild(im)
        document.body.appendChild(box)
    })
})

document.addEventListener("click",(e)=>{
    if(e.target.className == 'hi'){
        e.target.parentNode.remove()
    }
})

// end gallery section 



