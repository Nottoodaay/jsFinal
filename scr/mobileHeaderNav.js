const menuIcon = document.querySelector(".menuIcon")
const headerInMain = document.querySelector(".headerInMain")
// const imgSource = document.getElementById("imgScr")

menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("close")
    
    if(headerInMain.style.display =="none"){
        headerInMain.style.display = "block"
    }else{
        headerInMain.style.display = "none"
    }
})




