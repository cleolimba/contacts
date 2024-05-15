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

// propriéte pour enregistre le tableau

function addContact() {
    // Récupérer les valeurs du formulaire
    const prenom = document.getElementById('prenom').value;
    // const name = document.getElementById('name').value;
    const entreprise = document.getElementById('entreprise').value;
    const enregistre = document.getElementById('entreprise').value;
    const fonction = document.getElementById('fonction').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Créer une nouvelle ligne de tableau
    const tableBody = document.getElementById('contactTableBody');
    const newRow = tableBody.insertRow();

    // Insérer les nouvelles cellules
    const prenomcell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const phoneCell = newRow.insertCell(2);
    const fonctioncell = newRow.insertCell(3);
    // const nameCell = newRow.insertCell(1);
    const enregistrecell = newRow.insertCell(4);
    
    
    // Ajouter les valeurs aux cellules
    prenomcell.textContent = prenom;
    emailCell.textContent = email;
    phoneCell.textContent = phone;
    fonctioncell.textContent = fonction;
    // nameCell.textContent = name;
    enregistrecell.textContent = enregistre;
    
    // Réinitialiser le formulaire
    document.getElementById('contactForm').reset();
}

// bouton enregistre

document.querySelector('.btnContact').addEventListener('click', function(){
    
    const main_content = document.getElementById('main-content');
    const contactsContent = document.getElementById('contents');
    const tableauContacts = document.getElementById('tableau');

    if (tableauContacts.classList.contains("invisibles")) {
    console.log(document.getElementById('contents'))
        contactsContent.classList.add("invisibles");
        tableauContacts.classList.remove("invisibles");
        
    }else {
        contactsContent.classList.remove("invisibles");
        tableauContacts.classList.add("invisibles");
    }
});

//la partie libellés

let bopen = document.querySelector('#open');
let btnreset = document.querySelector('#btnreset');

function afficher() {
    document.querySelector('#btnLibelle').style.display="flex";
    console.log(document.querySelector('#libelles'));
}
function masquer() {
    document.querySelector('#libelles'); style.display = "none";
}

bopen.addEventListener("click",function () {
    afficher()
});
btnreset.addEventListener('click',masquer);
