const valDome = document.getElementById('btn');
const deleteMenu = document.getElementById('main-menu');



valDome.addEventListener('click', function(){
        const changeWidthContent = document.getElementById('main-content');
        if(changeWidthContent.classList.contains("main-content-fill")){
            changeWidthContent.classList.remove("main-content-fill");
            deleteMenu.classList.remove("hide-menu");
        }
        else{
            changeWidthContent.classList.add("main-content-fill");
            deleteMenu.classList.add("hide-menu");
        }
} 

)



// const domValu = document.getElementById("btn");
// console.log(domValu)
// domValu.addEventListener("click",function(){
//     if (domValu.style.display === "none") {
//         document.getElementById("main-menu").style.display = "block";
//         document.getElementById("main").style.display = "block";
//         // document.getElementById("main-content").style.marginLeft ="25%";
//         // document.getElementById("main-content").style.width ="80%";
//     }
//     else{
//         document.getElementById("main-menu").style.display = "none";
//         document.getElementById("main-content").style.marginLeft ="0%";
//         document.getElementById("main-content").style.width ="100%";
//     }
// });



// ajout d'une classe survolée pour sélectionner un élément de liste
// let list = document.querySelectorAll(".navigation li");

// function activeLink(){
//     list.forEach(item=> {
//         item.classList.remove("hovered");
//     })
//     this.classList.add("hovered");
// }

// list.forEach(item => item.addEventListener("mouscover", activeLink))

// menue

// function toggleMenu() {
//     const navMobile = document.querySelector('.navMobile');
//     const partieOverlay = document.querySelector('.navMobile');

//     if(navMobile.classList.contains('active')) {
//         navMobile.classList.add('active');
//     } else {
//         navMobile.classList.add('active');
//     }
// }
// function bergerMenu() {
//     var menu = document.querySelector('.menu');
//     menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
//   }
  