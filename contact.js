var icon =document.getElementById("icon")
var sidebar=document.getElementById("side-bar")
var xbar=document.getElementById("x-bar")
icon.addEventListener("click",function(){
    sidebar.style.right="0%"
    
})
xbar.addEventListener("click",function(){
    sidebar.style.right="-50%"
})