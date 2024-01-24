import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return(
        <div className="navbar">
            <h2>Контакты</h2>
            <div>
                <Link to='/create'>
                    <h2>Добавить Контакты</h2>
                </Link>
                <Link to='/contactList'>
                     <h2>Список Контактов</h2>
                </Link>
            </div>
        </div>
    )
}
export default Navbar;