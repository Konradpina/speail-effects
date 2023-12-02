const num=["0","1","2","3","4","5","6","7","8","9"]
t=0

document.getElementById("letters").onmousemove =e=>{
    let text=num[Math.floor(Math.random()*10)]
    for(i=0;i<100000;i++){
        t++
        if(t==200){
            text=text+"n/"
            t=0
        }
        p=Math.floor(Math.random()*10)
        text=text+num[p]
    }
    document.getElementById("letterstext").innerHTML=text
    
}
document.getElementById("letters").onclick =e    =>{
    document.getElementById("letterstext").style.color=`rgb(${Math.floor(Math.random()*255)+1},${Math.floor(Math.random()*255)+1},${Math.floor(Math.random()*255)+1})`
}