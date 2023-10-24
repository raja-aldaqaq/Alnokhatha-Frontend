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

      <div className='h'>

        <Link to="/addSlip" className={'link-user '}>Add Slip</Link>
        <Link to="slip" className={'link-user '}>
          All Slips
        </Link>
        <Link to="addBoat" className={'link-user'}>
          Add Boat
        </Link>
        <Link to="viewBoats" className={'link-user'}>
          All Boats
        </Link>
        <Link to="/addUsers" className={'link-user '}>
          Add User
        </Link>
        <Link to="harbors" className={'link-user '}>
          All Harbors
        </Link>
        <Link to="addHarbor" className={'link-user '}>
          Add Harbor
        </Link>
        <div className='profile'>
        <img
          src={`http://localhost:3001/${user.pic}`}
          className="profilepic"
        ></img>
        <h5>Welcome {user.name}!</h5>
        <Link to="/Show" className={'link-user'}>
          Show Profile
          </Link>
          <div className='log' onClick={handleLogOut}>Sign Out</div>
        </div>
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
        <div className='h'>
        <NavLink to="/" className={'link-styles'}>
          ALNOKHATHA
          </NavLink>
          
          

        </div>
        {user ? userOptions : publicOptions}
      </nav>
      
    </header>
  )
}

export default Nav
