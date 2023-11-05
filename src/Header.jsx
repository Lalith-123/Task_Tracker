import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import CombinedDropdown from './combinedDropdown';

function Header({
  selectedGrouping,
  setSelectedGrouping,
  selectedOrdering,
  setSelectedOrdering,
  orderingOptions,
  setOrderingOptions
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div>
        <button onClick={toggleDropdown} className="display" type="botton" style={{ backgroundColor: "white" }}>
          <FontAwesomeIcon className="icon1" icon={faSliders} style={{ color: "#000000" }} />
          <h6>Display</h6>
          <FontAwesomeIcon className="icon2" icon={faAngleDown} style={{ color: "#000000" }} />
        </button>
      </div>
      {showDropdown && (
        <div className="combine">
          <CombinedDropdown
            setSelectedGrouping={setSelectedGrouping}
            setSelectedOrdering={setSelectedOrdering}
            selectedGrouping={selectedGrouping}
            selectedOrdering={selectedOrdering}
            orderingOptions={orderingOptions}
            setOrderingOptions={setOrderingOptions}
          />
        </div>
      )}
    </div>
  );
}

export default Header;
