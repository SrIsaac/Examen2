import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
function Header(){
    const redireccion=useNavigate();
    function redirection (){
        redireccion("/")
    }
    return(
        <header className="Header">
            <div className="img"><img src="" alt="" /></div>
            <div className="lista">
                <ul>
                    <li><Link to={""}>Home</Link></li>
                    <li><Link to={""}>Usuario</Link></li>
                    <li><Link to={"/"}>cerrar sesion</Link></li>
                </ul>
            </div>
        </header>
    )
}
export default Header