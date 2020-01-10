'use strict';
import {loadJson} from "./utils/loadJSON.js";
import {socialNetworks} from "./utils/CONST.js";

loadJson("./data/employees.json")
    .then(createTeamList);


function createTeamList(teams) {
    const teamSection = document.getElementById("ourTeam");
    teams.forEach(
        (employee) => {
            teamSection.appendChild(createEmployeeCard(employee));
        }
    )
}

function createEmployeeCard(employee) {
    const employeeCard = document.createElement("div");
    employeeCard.classList.add("team");
    employeeCard.appendChild(createEmployeePicture(employee.profilePicture));
    employeeCard.appendChild(createPersonalInfo(employee));

    return employeeCard;
}

function createEmployeePicture(picture) {
    const employeePicture = document.createElement("img");
    employeePicture.classList.add("employeePicture");
    employeePicture.setAttribute("src",picture);
    return employeePicture;
}


function createPersonalInfo(employee) {
    const employeePersonalInfo = document.createElement("div");
    employeePersonalInfo.classList.add("personInfo");
    employeePersonalInfo.appendChild(createPersonInfoElem("h4",employee.name, "name"));
    employeePersonalInfo.appendChild(createPersonInfoElem("h5",employee.position, "position"));
    employeePersonalInfo.appendChild(createPersonInfoElem("p",employee.info, "info"));
    employeePersonalInfo.appendChild(createPersonInfoElem("ul",employee.contacts, "info"));
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
        personPositionElem.innerText = info;
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
