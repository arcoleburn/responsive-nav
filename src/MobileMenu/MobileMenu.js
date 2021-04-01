//style resources
import {
  faCheckCircle,
  faChevronRight,
  faMapMarkerAlt,
  faQuestionCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { MobileMenu as MobileMenuWrapper } from './MobileMenu.styles';

//components and data
import { menuData } from '../menuData';

import { MainMenuLink } from './MainMenuLink';

export const MobileMenu = (props) => {
  const renderLinks = (data) => {
    const links = [];

    data.forEach((link) => links.push(<MainMenuLink data={link} />));
    return links;
  };

  return (
    <MobileMenuWrapper className="mobile">
      <header>
        <span className="h4-headline">Menu</span>
        <Icon
          icon={faTimes}
          onClick={() => props.history.push('/')}
        />
      </header>
      <div className="links">{renderLinks(menuData)}</div>

      <div className="end">
        <div>
          <Icon icon={faQuestionCircle} />
          <span>
            <span>Help</span>
            <Icon icon={faChevronRight} />
          </span>
        </div>
        <div>
          <Icon icon={faMapMarkerAlt} />
          <span>Where to Buy/Rent</span>
        </div>
        <div>
          <Icon icon={faCheckCircle} />
          <span>Safety</span>
        </div>
      </div>
    </MobileMenuWrapper>
  );
};
