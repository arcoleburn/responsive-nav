//style resources
import { faChevronLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MobileMenu } from "../MobileMenu.styles";

//component resources
import {Dropdown} from '../dropdown'

export const SubNav = (props) => {
 
 const onBackClick = () => {
   console.log('back clicked')
   props.history.goBack()
 }
 
 const renderDropDowns = (data) => {
   let list = []
   data.forEach(item => list.push(<Dropdown key={item.name} data={item} />))
 return list
  }
 
  return (
    <MobileMenu className='mobile'> 
         <header>
        <span className="h4-headline">Menu</span>
        <FontAwesomeIcon icon={faTimes} onClick={()=>props.history.push('/')} />
      </header>
      <div className="h4-headline back" onClick={() => onBackClick()}>
      <FontAwesomeIcon icon={faChevronLeft} />
        <span>GO BACK</span>
      </div>
      <div className="links">
      {renderDropDowns(props.location.state.data.children)}
      </div>
    </MobileMenu>
  );
};
