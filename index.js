document.querySelector("button").addEventListener("click",function(){
    let num = Math.floor(Math.random()*10 +1);
    if(num%2===0){
        document.querySelector("a").setAttribute("href","./clg.html");
    }
    else{
        document.querySelector("a").setAttribute("href","./holiday.html");
    }
});