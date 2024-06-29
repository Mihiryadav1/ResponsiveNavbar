const body = document.querySelector("body")
const searchBtn = document.querySelector(".search-icon")
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const listItem = document.querySelectorAll(".list-item")
const modeText = document.querySelector(".mode-text");
const moonsunlist = document.querySelector(".moon-sun-list")
const paddingBig = document.querySelector(".padding-big")
const paddingSmall = document.querySelector(".padding-small")

const mainBody = document.querySelector(".main-body")

 toggle.addEventListener('click',
()=>{
    sidebar.classList.toggle("close")
    paddingBig.classList.toggle("padding-small")
  
    listItem.forEach(item => {
     item.classList.toggle("text");
   });
  
   modeText.classList.add("text")
   
   if (toggle.classList.contains("bx-chevron-right"))    {
     toggle.classList.remove("bx-chevron-right");
     toggle.classList.add("bx-chevron-left");
    
   } 
   else {
     toggle.classList.remove("bx-chevron-left");
     toggle.classList.add("bx-chevron-right");
   }
   }
)

//DarkMode
moonsunlist.addEventListener("click",()=>{
  body.classList.toggle("dark");
   toggle.style.backgroundColor="black";
    toggle.style.color ="white";
   mainBody.classList.toggle("darktext")
})