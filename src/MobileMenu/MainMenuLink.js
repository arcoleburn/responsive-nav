//style resources
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//component resources
import { useHistory } from "react-router"


export const MainMenuLink = (props) => {
  const history = useHistory()

  const onLinkClick = () => {
    history.push({pathname:`/mobileNav/${props.data.name.toLowerCase()}`, state: {data: props.data}} 
    )
  }
  
  return (
    
    <div className="h4-headline" onClick = {() => onLinkClick()}>
    <span>{props.data.name} </span>
    <FontAwesomeIcon icon={faChevronRight} />
  </div>

  )
}