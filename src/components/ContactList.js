import { useState,useEffect } from "react";

const ContactList = () => {
const [contacts,setContacts] = useState([])

// json
useEffect(() => {
    fetch('http://localhost:8000/contacts')
    .then(response => {
        return response.json();
    })
    .then(contacts => {
        setContacts(contacts)
    })
},[])

// deleting contacts
const handleDeleteContacts = (id) => {
    const newContactList = contacts.filter(contact => contact.id !== id)
    setContacts(newContactList)
    fetch("http://localhost:8000/contacts", {
        method: "DELETE",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify()
    })
}

    return(
        <div className="contactList">
                { contacts.map((contact) => (
                <div className="contactPreview" key={contact.id}>
                    {/* <img src={ require(contact.img) }/> */}
                    <h2>{ contact.name }</h2>
                    <p>{ contact.phoneNum }</p>
                    <button>Изменить</button>
                    <button onClick={() => handleDeleteContacts(contact.id)}>Удалить</button>
                </div>
            ))}
        </div> 
    )
}
export default ContactList