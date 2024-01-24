import { useState } from "react"
import defaultPicture from "../images/defaultImg.jpeg"
// creating contacts
const CreateContacts = () => {
    const [img,setImg] = useState(defaultPicture)
    const [name,setName] = useState()
    const [phoneNum,setPhoneNum] = useState()

    // changing image preview
    const handleChangePhoto = (e) => {
        setImg(URL.createObjectURL(e.target.files[0]))
    } 

    // submit 
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { img,name,phoneNum }
        fetch('http://localhost:8000/contacts', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
    }   

    return(
        <div className="createContacts">
            <h1>Добавить Контакт</h1>
            <form className="contactsForm" onSubmit={handleSubmit}>
            <div>
                {/* image */}
            <div className="left">
                <img src={img} className="imgExamp"/>
                <label id="photoInputLabel" htmlFor="photoInput">Добавить Фотографию</label>
                <input id="photoInput" type="file" accept="image/*" onChange={handleChangePhoto}/>
            </div>

            {/* Name & number */}
            <div className="right">
                <input type="text" id="name" placeholder="Имя" onChange={(e) => {setName(e.target.value)}}/>
                <input type="number" id="phoneNumber" placeholder="Номер телефона" onChange={(e) => {setPhoneNum(e.target.value)}}/>
            </div>
            </div>
            <button id="btnSubmit" type="submit">Сохранить</button>
            </form>
        </div>
    )
}
export default CreateContacts
