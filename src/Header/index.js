//style resources
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuestionCircle,
  faMapMarkerAlt,
  faCheckCircle,
  faShoppingCart,
  faUser,
  faSearch,
  faBars,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../Images/electric-logo.png';
import {
  MobileHeader as MHeaderWrapper,
  DesktopHeader,
  ExpandedNav,
} from './Header.styles';

//component resources
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { menuData } from '../menuData';

//mobile
export const MobileHeader = (props) => {
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      {!location.pathname.includes('/mobileNav') && (
        <MHeaderWrapper className="mobile">
          <div className="menu">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => history.push('/mobileNav')}
            />
            <img src={logo} alt='logo' />
          </div>
          <div className="options">
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon
              icon={faUser}
              onClick={() => console.log('location', location)}
            />
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="h4-headline">3</span>
          </div>
        </MHeaderWrapper>
      )}{' '}
    </>
  );
};

//desktop
export const Header = (props) => {
  const [selected, setSelected] = useState();
  const [navDetails, setDetails] = useState();

  const renderLinks = (data, to) => {
    const handleSelect = (e) => {
      if (!to) {
        let selection = e.target.outerText;
        console.log(e);
        const selectedDetails = menuData.filter(
          (x) => x.name === selection
        );

        setSelected(selected !== selection ? selection : '');
        setDetails(selectedDetails);
        console.log(selected);
      } else {
        setSelected('');
      }
    };

    let list = [];
    console.log(data);
    if (data) {
      data.forEach((item) =>
        list.push(
          <Link
            to={to}
            onClick={(e) => handleSelect(e)}
            key={item.name}
            onHover={to && (() => console.log('hover'))}
          >
            {item.name}
          </Link>
        )
      );
    }
    return list;
  };

  return (
    <>
      <DesktopHeader className="desktop">
        <div className="top">
          <div>
            <FontAwesomeIcon icon={faGlobe} />
            <span> EN</span>
          </div>
          <div className="menus">
            <FontAwesomeIcon icon={faCheckCircle} />
            <FontAwesomeIcon icon={faQuestionCircle} />
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <FontAwesomeIcon icon={faUser} />
            <div className="cart">
              <FontAwesomeIcon icon={faShoppingCart} />3
            </div>
          </div>
        </div>
        <div className="bottom">
          <nav>
            <img src={logo} alt='company logo' />
            {renderLinks(menuData)}
          </nav>
          <div className="search">
            <input type="text" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </DesktopHeader>
      {selected && (
        <ExpandedNav className="desktop">
          {navDetails
            ? renderLinks(navDetails[0].children, '/')
            : null}
        </ExpandedNav>
      )}
    </>
  );
};
