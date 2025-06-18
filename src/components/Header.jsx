import { NavLink } from "react-router"

function Header() {
  return <header>
    <nav className="flex justify-between items-center px-4 py-2 bg-pink-400">
        <span className="text-2xl">Eventify</span>
        <ul className="flex gap-2">
            <li>
                <NavLink to="/"> Events </NavLink>
            </li>
            <li>
                <NavLink to="/events/1"> Event 1</NavLink>
            </li>
             <li>
                 <NavLink to="/login"> Login </NavLink>
             </li>
             <li>
                <NavLink to="/signup"> Register </NavLink>               
             </li>       
             <li>
                <NavLink to="/profile"> Profile </NavLink>               
             </li>                
        </ul>
    </nav>
  </header>
}
export default Header