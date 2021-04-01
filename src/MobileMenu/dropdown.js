//style resources
import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//component resources
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Dropdown = (props) => {
  const [expanded, setExpand] = useState(false);

  const onExpClick = () => {
    setExpand(!expanded);
  };

  
  const renderItems = (options) => {
    const links = [];
    options.forEach((item) => links.push(<Link to="/" key={item} className='final-nav'>{item}</Link>));
    return links;
  };

  return (
    <>
      <div className="h4-headline sub" onClick={()=>onExpClick()}>
        <span>{props.data.name} </span>
        <FontAwesomeIcon
          icon={!expanded ? faChevronRight : faChevronDown}
        />
      </div>
      {expanded && renderItems(props.data.children)}
    </>
  );
};
