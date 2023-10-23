import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { NavLink } from 'react-router-dom'
import '../App.css'


const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <h3>Welcome {user.email}!</h3>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )

  return (
    <header>
            <nav>
        <NavLink to="/" className={'link-styles'}>
          ALNOKHATHA
        </NavLink>
        <NavLink to="addSlip" className={'link-user '}>
          Add Slip
        </NavLink>
        <NavLink to="slip" className={'link-user '}>
          All Slips
        </NavLink>
        <NavLink to="Showprofile" className={'link-user '}>
          Showprofile
        </NavLink>
        <NavLink to="/addUsers"  className={'link-user '}>
         Add User
        </NavLink>
        <NavLink to="harbors" className={'link-user '}>
          All Harbors
        </NavLink>
        <NavLink to="addHarbor" className={'link-user '}>
          Add Harbor
        </NavLink>

      </nav>
      {/* {user ? userOptions : publicOptions} */}
    </header>
  )
}

export default Nav
