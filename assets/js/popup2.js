window.addEventListener("load",function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup2").style.display="block";
        },1000
    )
});

document.querySelector("#close").addEventListener
("click",function(){
    document.querySelector(".popup2").style.display = "none";
});
    

              
