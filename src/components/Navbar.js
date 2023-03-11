import { Link } from "react-router-dom"
import { useContext } from "react"
import { LoadingContext } from "../context/loading.context"
import { AuthContext } from "../context/auth.context"
import { FaSignOutAlt, FaUser } from 'react-icons/fa'


const Navbar = () => {

    const getToken = () => {
        return localStorage.getItem("authToken")
    }

    const { user } = useContext(LoadingContext)

    const { logout } = useContext(AuthContext)

    return (
        <nav className="navbar">
            <div>
                <Link to={'/'} className="logo" >RegistryBuilder.com</Link>
            </div>
            {/* <Link onClick={getGoals} to={'/goals'}>All Goals</Link> */}
            
            {
                getToken() ? 
                <>
                    {user && <Link to={`/profile/${user._id}`}>My Profile</Link>}
                    {/* <Link to={'/new-goal-form'}>New Goal</Link> */}
                    
                    <button className="btn" onClick={logout}><FaSignOutAlt /> Logout</button>
                </>

                :

                <>
                    <div>
                        <span className="nav-link">
                            <Link to={'/signup'}><FaUser />Signup</Link>
                        </span>
                        <span className="nav-link">
                            <Link to={'/login'}><FaUser/> Login</Link>
                        </span>
                    </div>
                </>
            }


        </nav>
    )
}

export default Navbar;