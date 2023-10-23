import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Nav = () => {
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
        <NavLink to="addBoat" className={'link-user'}>
          Add Boat
        </NavLink>
        <NavLink to="harbors" className={'link-user '}>
          All Harbors
        </NavLink>
        <NavLink to="addHarbor" className={'link-user '}>
          Add Harbor
        </NavLink>
      </nav>
    </header>
  )
}

export default Nav
