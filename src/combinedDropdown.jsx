import React from 'react';

const CombinedDropdown = ({selectedGrouping, setSelectedGrouping, selectedOrdering, setSelectedOrdering, orderingOptions, setOrderingOptions}) => {
  const Grouping = ['Status', 'User', 'Priority'];

  const handleGroupingChange = (selected) => {
    setSelectedGrouping(selected);
    if (selected === 'Priority') {
      setOrderingOptions(['Title']);
      setSelectedOrdering("Title")
    } else {
      setOrderingOptions(['Priority', 'Title']);
    }
  };

  const handleOrderingChange = (selected) => {
    setSelectedOrdering(selected);
  };

  return (
    <div className='dropdownTotal'>
      <div className="dropdown">
        <div className='ord'><h6>Grouping</h6></div>
        <select className='Ords'
          value={selectedGrouping}
          onChange={(e) => handleGroupingChange(e.target.value)}
        >
          {Grouping.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="dropdown">
        <div className='ord'><h6>Ordering</h6></div>
        <select className='Ords'
          value={selectedOrdering}
          onChange={(e) => handleOrderingChange(e.target.value)}
        >
          {orderingOptions.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CombinedDropdown;
