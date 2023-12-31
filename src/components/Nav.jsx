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
      <div className="h">
        {user.type === 'client' ? (
          <>
            <Link to="addBoat" className={'link-user'}>
              Add Boat
            </Link>
            <Link to="myBoats" className={'link-user'}>
              My Boats
            </Link>
            <Link to="createRequest" className={'link-user'}>
              Create Request
            </Link>
          </>
        ) : null}

        {user.type === 'admin' ? (
          <div>
            <Link to="/addUsers" className={'link-user '}>
              Add User
            </Link>
            <Link to="viewBoats" className={'link-user'}>
              All Boats
            </Link>
            <Link to="harbors" className={'link-user '}>
              All Harbors
            </Link>
            <Link to="addHarbor" className={'link-user '}>
              Add Harbor
            </Link>
            <Link to="/addSlip" className={'link-user '}>
              Add Slip
            </Link>
            <Link to="slip" className={'link-user '}>
              All Slips
            </Link>
          </div>
        ) : null}

        {user.type === 'staff' ? (
          <div>
            <Link to="viewBoats" className={'link-user'}>
              All Boats
            </Link>
            <Link to="harbors" className={'link-user '}>
              All Harbors
            </Link>
            <Link to="/addSlip" className={'link-user '}>
              Add Slip
            </Link>
            <Link to="slip" className={'link-user '}>
              All Slips
            </Link>
          </div>
        ) : null}

        <div className="profile">
          <img
            src={`http://localhost:3001/${user.pic}`}
            className="profilepic"
          ></img>
          <h5 className='welcome'>Welcome {user.name}!</h5>
        </div>
        <Link to="/Show" className={'link-user'}>
            Show Profile
          </Link>
          <div className={'link-user'} onClick={handleLogOut}>
            Sign Out
          </div>
      </div>
    )
  }

  const publicOptions = (
    <div>
      <Link to="/" className={'link-user'}>Home</Link>
      <Link to="/register" className={'link-user'}>Register</Link>
      <Link to="/signin" className={'link-user'}>Sign In</Link>
    </div>
  )

  return (
    <header>
      <nav>
        {/* <div className="h"> */}
          <NavLink to="/" className={'link-styles'}>
            ALNOKHATHA
          </NavLink>
        {/* </div> */}

        {user ? userOptions : publicOptions}
      </nav>
    </header>
  )
}

export default Nav
