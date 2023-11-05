import React from 'react';
import data from './info'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faCircle,
  faCircleHalfStroke,
  faCircleCheck,
  faCircleXmark,
  faEllipsis,
  faBatteryHalf,
  faBatteryEmpty,
  faBatteryFull,
  faTriangleExclamation,
  faFaceSmile,
  faFaceSmileWink,
  faFaceSadTear,
  faFaceMeh,
  faFaceMehBlank
} from '@fortawesome/free-solid-svg-icons';

function Ticket({ ticketId}) {
  const getStatusIcon = status => {
    switch (status) {
      case 'Backlog':
        return <FontAwesomeIcon icon={faCalendarDays} style={{ color: '#fe0606' }} />;
      case 'Todo':
        return <FontAwesomeIcon icon={faCircle} style={{color: "#bababa",}} />
      case 'In progress':
        return <FontAwesomeIcon icon={faCircleHalfStroke} style={{ color: '#fff700' }} />;
      case 'Done':
        return <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#5266ff' }} />;
      case 'Canceled':
        return <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#9c9c9c' }} />;
      default:
        return null;
    }
  };

  const getPriorityIcon = priority =>{
    switch (priority) {
      case 0:
        return <FontAwesomeIcon icon={faEllipsis} style={{color: "#b0b0b0",}} />;
      case 2:
        return <FontAwesomeIcon icon={faBatteryHalf} style={{color: "#b0b0b0",}} />;
      case 1:
        return <FontAwesomeIcon icon={faBatteryEmpty} style={{color: "#b0b0b0",}} />;
      case 3:
        return <FontAwesomeIcon icon={faBatteryFull} style={{color: "#b0b0b0",}} />;
      case 4:
        return <FontAwesomeIcon icon={faTriangleExclamation} style={{color: "#b0b0b0",}} />;
      default:
        return null;
    }
  }

  const getUserIcon = user =>{
    switch (user) {
      case "usr-1":
        return <FontAwesomeIcon icon={faFaceSmile} />;
      case "usr-2":
        return <FontAwesomeIcon icon={faFaceSmileWink} />;
      case "usr-3":
        return <FontAwesomeIcon icon={faFaceSadTear} />;
      case "usr-4":
        return <FontAwesomeIcon icon={faFaceMeh} />;
      case "usr-5":
        return <FontAwesomeIcon icon={faFaceMehBlank} />;
      default:
        return null;
    }
  }

  const ticket = data.tickets.find(ticket => ticket.id === ticketId);
  console.log(ticketId)

  return (
      <div className='ticket'>
        <div className='id1'>
        <div className='id'>{ticket.id}</div>
        <div className='userId'>{getUserIcon(ticket.userId)}</div>
        </div>
        <div className='status1'>
        <div className='status'>{getStatusIcon(ticket.status)}</div>
        <p className='title'>{ticket.title}</p>
        </div>
        <div className='priority1'>
        <div className='priority'>{getPriorityIcon(ticket.priority)}</div>
        <div className='tag'><p>{ticket.tag}</p></div>
        </div>
      </div>
  );
}

export default Ticket;
