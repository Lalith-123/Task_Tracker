import React from 'react';
import data from './info';
import Column from './Column';

function Heading({ selectedGrouping, selectedOrdering }) {
  let ticketData = [];
  
  if (selectedGrouping === 'Status') {
    const statusArray = ['Backlog', 'Todo', 'In progress', 'Done', 'Canceled'];
    const statusTickets = statusArray.reduce((acc, status) => {
      const filteredTickets = data.tickets.filter(ticket => ticket.status === status);
      if (selectedOrdering === 'Priority') {
        filteredTickets.sort((a, b) => b.priority - a.priority);
      } else if (selectedOrdering === 'Title') {
        filteredTickets.sort((a, b) => a.title.localeCompare(b.title));
      }
      acc[status] = filteredTickets.map(ticket => ticket.id);
      return acc;
    }, {});
    ticketData = statusTickets;
  } else if (selectedGrouping === 'User') {
    const userArray = data.users.map(user => user.id);
    const userTickets = userArray.reduce((acc, userId) => {
      const filteredTickets = data.tickets.filter(ticket => ticket.userId === userId);
      if (selectedOrdering === 'Priority') {
        filteredTickets.sort((a, b) => b.priority - a.priority);
      } else if (selectedOrdering === 'Title') {
        filteredTickets.sort((a, b) => a.title.localeCompare(b.title));
      }
      acc[userId] = filteredTickets.map(ticket => ticket.id);
      return acc;
    }, {});
    ticketData = userTickets;
  } else if (selectedGrouping === 'Priority') {
    const priorityArray = [0, 1, 2, 3, 4];
    const priorityTickets = priorityArray.reduce((acc, priority) => {
      const filteredTickets = data.tickets.filter(ticket => ticket.priority === priority);
      filteredTickets.sort((a, b) => a.title.localeCompare(b.title));
      acc[priority] = filteredTickets.map(ticket => ticket.id);
      return acc;
    }, {});
    ticketData = priorityTickets;
  }

  function createColumn() {
    return Object.entries(ticketData).map(([group, tickets]) => (
      <Column key={group} group={group} tickets={tickets} selectedGrouping={selectedGrouping}/>
    ));
  }

  return (
    <div className='table'>
      {createColumn()}
    </div>
  );
}

export default Heading;
