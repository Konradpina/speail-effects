const rockets= ["rocket1","rocket2","rocket3","rocket4","rocket5"]
const sparkels=["sparkel1","sparkel2","sparkel3","sparkel4","sparkel5"]

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
    rocket.style.top=`${250+Math.floor(Math.random()*50)}vh`
    rocket.className=`rocket ${rockets[Math.floor(Math.random()*5)]}`
    
    document.body.appendChild(rocket);
    setTimeout(() => {
        
        rocket.classList.add("explosion")
    }, 900);
}


function rocketdots(){
    if(document.getElementsByClassName("rocket").length!==0){

        for(i=0;i<document.getElementsByClassName("rocket").length;i++){
            var dot =document.createElement("span");
            dot.className =sparkels[Math.floor(Math.random()*5)]
            dot.style.left=`${document.getElementsByClassName("rocket")[i].getBoundingClientRect().x}px`
            dot.style.top=`${document.getElementsByClassName("rocket")[i].getBoundingClientRect().y}px`
            dot.style.marginTop=`200vh`
            
            document.body.appendChild(dot);
            setTimeout(() => {
            dot.remove()
            }, 1000);
        }   
    }
    if(document.getElementsByClassName("explosion").length!==0){
        
        for(i=0;i<document.getElementsByClassName("explosion").length;i++){
            console.log(document.getElementsByClassName("explosion")[0].getBoundingClientRect().y)
       
        const xx=`${document.getElementsByClassName("explosion")[0].getBoundingClientRect().x}px`
        const yy=`${document.getElementsByClassName("explosion")[0].getBoundingClientRect().y}px`
        document.getElementsByClassName("explosion")[0].remove()
            const colorkey=`rgb(${Math.floor(Math.random()*255)+1},${Math.floor(Math.random()*255)+1},${Math.floor(Math.random()*255)+1})`
            for(i=0;i<points.length;i++){
                var point =document.createElement("span");
                document.body.appendChild(point);
                point.style.marginTop=`200vh`
                point.style.left=xx
                point.style.top=yy
                point.className =`point ${points[i]}`
                point.style.backgroundColor=colorkey
                point.style.boxShadow=`${colorkey} 0px 0px 2vh`
                
                
               

            }
            setTimeout(() => {
                for(i=0;i<document.getElementsByClassName("point").length;i){
                    document.getElementsByClassName("point")[0].remove()
                }     
            }, 1000);
        }
       
    }

    if(document.getElementsByClassName("point").length!==0){

        for(i=0;i<document.getElementsByClassName("point").length;i++){
            var dot =document.createElement("span");
            dot.className =dots[Math.floor(Math.random()*4)]
            dot.style.left=`${document.getElementsByClassName("point")[i].getBoundingClientRect().x}px`
            dot.style.top=`${document.getElementsByClassName("point")[i].getBoundingClientRect().y}px`
            dot.style.marginTop=`200vh`
            
            document.body.appendChild(dot);
            setTimeout(() => {
            dot.remove()
            }, 100);
        }   
    }
    
}