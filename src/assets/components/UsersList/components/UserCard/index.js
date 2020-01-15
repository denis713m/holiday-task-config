import './styles.scss';
import createPicture from '../../../Picture';
import {socialNetworks} from "../../../../js/utils/const";


export default function (user) {
  const cardContainer = document.createElement( 'div' );
  cardContainer.classList.add("team");
  const userPicture = createPicture( user.profilePicture, './assets/images/user_icon.jpg', 'profile picture', ["employeePicture"] );
  cardContainer.appendChild( userPicture );
  cardContainer.appendChild(createPersonalInfo(user));
  return cardContainer;
}

function createPersonalInfo(user) {
  const employeePersonalInfo = document.createElement("div");
  employeePersonalInfo.classList.add("personInfo");
  employeePersonalInfo.appendChild(createPersonInfoElem("h4",user.name, "name"));
  employeePersonalInfo.appendChild(createPersonInfoElem("h5",user.position, "position"));
  employeePersonalInfo.appendChild(createPersonInfoElem("p",user.info, "info"));
  employeePersonalInfo.appendChild(createPersonInfoElem("ul", user.contacts, "info"));
  return employeePersonalInfo;
}

function createPersonInfoElem(tag, info, cssclass) {
  const personPositionElem = document.createElement(tag);
  if(tag === "ul")
  {
    socialNetworks.forEach((social) => {
      info.forEach((contact) => {
        createSocialNetwork(contact, social[0], social[1], personPositionElem);
      });
    })
  }
  else {
    personPositionElem.classList.add(cssclass);
    personPositionElem.innerText = info || " ";
  }
  return personPositionElem;
}
function createSocialNetwork(href, name, icon, parentElem) {
  if (href.includes(name)){
    const liElem = document.createElement("li");
    const aElem = document.createElement("a");
    const iElem = document.createElement("i");
    aElem.classList.add("teamSocial");
    iElem.classList.add("fa", icon);
    aElem.appendChild(iElem);
    aElem.setAttribute("href", href);
    liElem.appendChild(aElem);
    parentElem.appendChild(liElem);
  }
}