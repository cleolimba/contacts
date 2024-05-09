// ajout d'une classe survolée pour sélectionner un élément de liste
let list = document.querySelectorAll(".navigation li");

function activeLink(){
    list.forEach(item=> {
        item.classList.remove("hovered");
    })
    this.classList.add("hovered");
}

list.forEach(item => item.addEventListener("mouscover", activeLink))


// function bergerMenu() {
//     var menu = document.querySelector('.menu');
//     menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
//   }
  