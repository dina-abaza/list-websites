let selectfield=document.getElementById("selectfield");
let selectText=document.getElementById("selectText");
let options=document.getElementsByClassName("options");
let list=document.getElementById("list")

selectfield.onclick=function(){
list.classList.toggle("hide");
}

for(option of options){
    option.onclick=function(){
        selectText.innerHTML=this.textContent;
        list.classList.toggle("hide");
    }
}