let contacts = document.querySelector('.contacts');
let contactForm = document.querySelector('.contact-form')
let contactInput = document.querySelector('.contact-input')
let searchCriteria = document.querySelector('.search-input');


// initaialize local storage
let contactList = localStorage.getItem('contacts') == null || undefined ? localStorage.setItem('contacts', JSON.stringify([])) : localStorage.getItem('contacts')


contactForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    Contact.addContact() 
    Contact.renderContacts()
    contactInput.value = ''           
})

searchCriteria.addEventListener('keydown', ()=>{
    Contact.searchContact()
})


class Contact{

    static renderContacts(data){

        let contactDataView = document.querySelectorAll('.contacts .contact')
        contactDataView.forEach(el=>el.remove())

        let contactHtml = ''

        let db = data ?? JSON.parse(localStorage.contacts)
        console.log(db);
        db.forEach((contact)=>{
            contactHtml += `
                <div class="contact">
                    <div class="image">
                        <img width="30px" height="30px" src="./assets/user (1).png" alt="">
                    </div>
                    <div class="name">
                        <p>${contact}</p>
                    </div>
                </div>
            `
        })

        contacts.innerHTML = contactHtml;
    }

    static addContact(){
        let db = JSON.parse(localStorage.contacts)
        localStorage.contacts = JSON.stringify([...db, contactInput.value])
    }

    static searchContact(searchgit ){
        let db = JSON.parse(localStorage.contacts)
        let data = db.filter((names)=>names==searchCriteria)
        Contact.renderContacts(data)
    }

    static updateContact(){

    }

    static deleteContact(){

    }
}



Contact.renderContacts()