var icon =document.getElementById("icon")
var sidebar=document.getElementById("side-bar")
var xbar=document.getElementById("x-bar")
icon.addEventListener("click",function(){
    sidebar.style.right="0%"
    
})
xbar.addEventListener("click",function(){
    sidebar.style.right="-50%"
})
var search =document.getElementById("search")
var container=document.getElementById("container")
var productlist= container.querySelectorAll("div")

search.addEventListener("keyup",function(){
     var enteredvalue= event.target.value.toUpperCase()
     for(count=0;count<productlist.length;count=count+1){
        var productname=productlist[count].querySelector("h1").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
           productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
     }
})