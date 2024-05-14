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

function contact_table() {
    let body = document.getElementsByTagName("body") [0];
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    // for (var i = 0; i < 2; i++) {
        let row = document.createElement("tr");
        // for (var j = 0; j < 2; j++) {
            let cell = document.createElement("td");
            // let text = "valeur "+ j;
            // cell.textContent=text;
            row.appendChild(cell);
        }
        // tblBody.appendChild(row);
    
    // tbl.appendChild(tblBody);
    // body.appendChild(tbl);
    // tbl.setAttribute("border", "2");


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
