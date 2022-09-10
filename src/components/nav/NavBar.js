import { NavLink, useLocation } from 'react-router-dom';
import Home from '../../assets/home.png';
import back from '../../assets/back.png';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navigation-bar">
      <div className="nav-logo">
        <ul className="navigation-ul">
          <li className="NavLink">
            <NavLink to="/" className="logo">
              {location.pathname === '/' ? <img src={Home} alt="Home logo" className="prism" />
                : <img src={back} alt="back logo" className="prism" />}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="logo-div">
        <p className="logo-p">Crypto Currencies</p>
      </div>
    </nav>
  );
};

export default Navbar;
