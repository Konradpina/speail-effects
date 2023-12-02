
const dots=["dot1","dot2","dot3","dot4"]
const points=["point1","point2","point3","point4","point5","point6","point7","point8"]

document.getElementById("starbox").onmousemove = e=>{
    var dot =document.createElement("span");
    dot.className =dots[Math.floor(Math.random()*4)]
    dot.style.left=`${e.x}px`
    dot.style.top=`${e.y}px`
    
    
    document.body.appendChild(dot);
    setTimeout(() => {
       dot.remove()
    }, 1000);
}
document.getElementById("starbox").onclick = e=>{
    const colorkey=`rgb(${Math.floor(Math.random()*255)+1},${Math.floor(Math.random()*255)+1},${Math.floor(Math.random()*255)+1})`
    for(i=0;i<points.length+1;i++){
        var point =document.createElement("span");
        document.body.appendChild(point);
        point.style.left=`${e.x}px`
        point.style.top=`${e.y}px`
        point.className =`point ${points[i]}`
        point.style.backgroundColor=colorkey
        point.style.boxShadow=`${colorkey} 0px 0px 2vh`

        
    }
    
    // setTimeout(() => {
    //     const lendth=document.getElementsByClassName("point")
    //     for(i=0;i<document.getElementsByClassName("point").length.length;i++){
    //         console.log(i)
    //         document.getElementsByClassName("point")[0].remove()
    //     }
    // }, 100);
}

document.getElementById("starbox").ontouchmove = e=>{
    var dot =document.createElement("span");
    dot.className =dots[Math.floor(Math.random()*4)]
    dot.style.left=`${e.x}px`
    dot.style.top=`${e.y}px`
    
    
    document.body.appendChild(dot);
    setTimeout(() => {
       dot.remove()
    }, 1000);
}
