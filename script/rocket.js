const rockets= ["rocket1","rocket2","rocket3","rocket4","rocket5"]
const sparkels=["sparkel1","sparkel2","sparkel3","sparkel4","sparkel5"]
const dotsparks=["botspark1","botspark2","botspark3","botspark4"]
let r=Math.floor(Math.random()*255)+1
let g=Math.floor(Math.random()*255)+1
let b=Math.floor(Math.random()*255)+1
var rocktime
var rocktimee

document.getElementById("rocketbox").onmouseenter= e=>{
    rocktime =setInterval(rocketstart,3000)
    rocktimee = setInterval(rocketdots,10)
}
document.getElementById("rocketbox").onmouseleave=e=>{
 clearInterval(rocktime)
 clearInterval(rocktimee)
}




function rocketstart(){
    var rocket =document.createElement("span");
    rocket.style.left=`${Math.floor(Math.random()*100)}vw`
    rocket.style.top=`${250+Math.floor(Math.random()*45)}vh`
    rocket.className=`rocket ${rockets[Math.floor(Math.random()*5)]}`
   
    r=Math.floor(Math.random()*255)+1
    g=Math.floor(Math.random()*255)+1
    b=Math.floor(Math.random()*255)+1

    document.body.appendChild(rocket);
    setTimeout(() => {
        
        rocket.classList.add("explosion")
    }, 900);
}


function rocketdots(){
     //Start rocket particels
    if(document.getElementsByClassName("rocket").length!==0){

        for(i=0;i<document.getElementsByClassName("rocket").length;i++){
            var dot =document.createElement("span");
            dot.className =sparkels[Math.floor(Math.random()*5)]
            dot.style.left=`${document.getElementsByClassName("rocket")[i].getBoundingClientRect().x}px`
            dot.style.top=`${document.getElementsByClassName("rocket")[i].getBoundingClientRect().y}px`
            dot.style.marginTop=`200vh`
            if((Math.random()*100)<20){
                dot.style.backgroundColor=`rgb(${r},${g},${b})`
            }
            
            document.body.appendChild(dot);
            setTimeout(() => {
            dot.remove()
            }, 1000);
        }   
    }

    //Start Explosion
    if(document.getElementsByClassName("explosion").length!==0){
        
        for(i=0;i<document.getElementsByClassName("explosion").length;i++){
            console.log(document.getElementsByClassName("explosion")[0].getBoundingClientRect().y)
       
        const xx=`${document.getElementsByClassName("explosion")[0].getBoundingClientRect().x}px`
        const yy=`${document.getElementsByClassName("explosion")[0].getBoundingClientRect().y}px`
        document.getElementsByClassName("explosion")[0].remove()
            
            for(i=0;i<points.length;i++){
                var point =document.createElement("span");
                document.body.appendChild(point);
                point.style.marginTop=`200vh`
                point.style.left=xx
                point.style.top=yy
                point.className =`point ${points[i]}`

            }
            setTimeout(() => {
                for(i=0;i<document.getElementsByClassName("point").length;i){
                    document.getElementsByClassName("point")[0].remove()
                }     
            }, 1000);
        }
       
    }

    //Render Explosion
    if(document.getElementsByClassName("point").length!==0){
            let r2=r+(Math.floor(Math.random()*50)-10)
            let b2=b+(Math.floor(Math.random()*50)-10)
            let g2=g+(Math.floor(Math.random()*50)-10)


        for(i=0;i<document.getElementsByClassName("point").length;i++){
            var dod =document.createElement("span")
            dod.className =`rockdot ${dotsparks[Math.floor(Math.random()*4)]}`
            dod.style.left=`${document.getElementsByClassName("point")[i].getBoundingClientRect().x}px`
            dod.style.top=`${document.getElementsByClassName("point")[i].getBoundingClientRect().y}px`
            dod.style.marginTop=`200vh`
            dod.style.backgroundColor=`rgb(${r2},${g2},${b2})`
            dod.style.boxShadow=`rgb(${250},${g},${b}) 0px 0px 2vh`
            document.body.appendChild(dod);
            
        }   
        setTimeout(() => {
            for(i=0;i<document.getElementsByClassName("rockdot").length;i){
                document.getElementsByClassName("rockdot")[0].remove()
            }     
        }, 2000);
    }
    
}