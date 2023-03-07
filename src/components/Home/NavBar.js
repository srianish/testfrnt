import "./NavBar.css"
import { useSignOut } from 'react-auth-kit'
import {useIsAuthenticated} from "react-auth-kit"
import { useNavigate } from "react-router-dom"


function NavBar(){
    const signOut = useSignOut()
    const isAuthenticated = useIsAuthenticated()
    const navigate = useNavigate()

    return <ul>
      <li><a href="#home">Home</a></li>
      {!isAuthenticated ?<li style={{ float :"right"}} onClick={signOut}>
                       <a className="active" href="#about"> Sign In</a>
                       </li>:""}</ul>
}

export default NavBar;