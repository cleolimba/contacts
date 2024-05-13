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

// propriéte pour faire fonctionner le bouton ajouter contacts

document.querySelector('.addContact').addEventListener('click', function(){
    
    const main_content = document.getElementById('main-content');
    const contactsContent = document.getElementById('contents');
    const popupForm = document.getElementById('popup');

    if (popupForm.classList.contains("invisible")) {
    console.log(document.getElementById('contents'))
        contactsContent.classList.add("invisible");
        popupForm.classList.remove("invisible");
        
    }else {
        contactsContent.classList.remove("invisible");
        popupForm.classList.add("invisible");
    }
});