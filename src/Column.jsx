import React from 'react';
import Ticket from './Ticket';
import data from './info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCircle, faCircleHalfStroke, faCircleCheck, faCircleXmark, faEllipsis, faBatteryHalf, faBatteryEmpty, faBatteryFull, faTriangleExclamation, faFaceSmile, faFaceSmileWink, faFaceSadTear, faFaceMeh, faFaceMehBlank } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons

function Column({ group, tickets, selectedGrouping }) {
  let renderedGroup = group;
  let icon = null;

  if (selectedGrouping === 'Status') {
    switch (group) {
      case 'Backlog':
        icon = <FontAwesomeIcon icon={faCalendarDays} style={{ color: '#fe0606' }} />;
        break;
      case 'Todo':
        icon = <FontAwesomeIcon icon={faCircle} style={{ color: '#bababa' }} />;
        break;
      case 'In progress':
        icon = <FontAwesomeIcon icon={faCircleHalfStroke} style={{ color: '#fff700' }} />;
        break;
      case 'Done':
        icon = <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#5266ff' }} />;
        break;
      case 'Canceled':
        icon = <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#9c9c9c' }} />;
        break;
      default:
        icon = null;
        break;
    }
  } else if (selectedGrouping === 'Priority') {
    switch (group) {
      case "0":
        icon = <FontAwesomeIcon icon={faEllipsis} style={{ color: '#b0b0b0' }} />;
        break;
      case "1":
        icon = <FontAwesomeIcon icon={faBatteryEmpty} style={{ color: '#b0b0b0' }} />;
        break;
      case "2":
        icon = <FontAwesomeIcon icon={faBatteryHalf} style={{ color: '#b0b0b0' }} />;
        break;
      case "3":
        icon = <FontAwesomeIcon icon={faBatteryFull} style={{ color: '#b0b0b0' }} />;
        break;
      case "4":
        icon = <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: '#b0b0b0' }} />;
        break;
      default:
        icon = null;
        break;
    }
    switch (group) {
      case "0":
        renderedGroup = "No priority";
        break;
      case "1":
        renderedGroup = "Low";
        break;
      case "2":
        renderedGroup = "Medium";
        break;
      case "3":
        renderedGroup = "High";
        break;
      default:
        renderedGroup = "Urgent";
        break;
    }
  } else if (selectedGrouping === 'User') {
    switch (group) {
      case 'usr-1':
        icon = <FontAwesomeIcon icon={faFaceSmile} />;
        break;
      case 'usr-2':
        icon = <FontAwesomeIcon icon={faFaceSmileWink} />;
        break;
      case 'usr-3':
        icon = <FontAwesomeIcon icon={faFaceSadTear} />;
        break;
      case 'usr-4':
        icon = <FontAwesomeIcon icon={faFaceMeh} />;
        break;
      case 'usr-5':
        icon = <FontAwesomeIcon icon={faFaceMehBlank} />;
        break;
      default:
        icon = null;
        break;
    }
    const userDictionary = data.users.reduce((acc, user) => {
      acc[user.id] = user.name;
      return acc;
    }, {});
    
    renderedGroup = userDictionary[group] || group;
  }

  return (
    <div className='column'>
      <div className='head'>
        <div className='icon'>{icon && icon}</div>
        <div className='grpName'><h3>{renderedGroup}</h3></div>
        <div className='length'><p>{tickets.length}</p></div>
      </div>
      <div>
        {tickets.map(ticketId => (
          <Ticket key={ticketId} ticketId={ticketId} />
        ))}
      </div>
    </div>
  );
}

export default Column;
