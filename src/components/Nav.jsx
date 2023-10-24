import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Nav = ({ user, handleLogOut }) => {
  let userOptions

  if (user) {
    console.log(user.pic)
    user.pic = user.pic.replace('public', '')
    console.log(user.pic)

    userOptions = (
      <div>
        <img
          src={`http://localhost:3001/${user.pic}`}
          className="profilepic"
        ></img>

        <h3 className="welcome">Welcome {user.name}!</h3>

        <Link to="/Show" className={'link-user'}>
          Show Profile
        </Link>
        <div onClick={handleLogOut}>Sign Out</div>
      </div>
    )
  }

  const publicOptions = (
    <div>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </div>
  )

  return (
    <header>
      <nav>
        <div>
          <NavLink to="/" className={'link-styles'}>
            ALNOKHATHA
          </NavLink>
          <NavLink to="addSlip" className={'link-user '}>
            Add Slip
          </NavLink>
          <NavLink to="slip" className={'link-user '}>
            All Slips
          </NavLink>
          <NavLink to="addBoat" className={'link-user'}>
            Add Boat
          </NavLink>
          <NavLink to="viewBoats" className={'link-user'}>
            All Boats
          </NavLink>
          <NavLink to="Showprofile" className={'link-user '}>
            Showprofile
          </NavLink>
          <NavLink to="/addUsers" className={'link-user '}></NavLink>
          {/* <NavLink to="Showprofile" className={'link-user '}>
          Edit Profile
        </NavLink> */}
          {/* <NavLink to="Show" className={'link-user '}> Showprofile</NavLink> */}
          <NavLink to="/addUsers" className={'link-user '}>
            Add User
          </NavLink>
          <NavLink to="harbors" className={'link-user '}>
            All Harbors
          </NavLink>
          <NavLink to="addHarbor" className={'link-user '}>
            Add Harbor
          </NavLink>
        </div>
        {user ? userOptions : publicOptions}
      </nav>
    </header>
  )
}

export default Nav
