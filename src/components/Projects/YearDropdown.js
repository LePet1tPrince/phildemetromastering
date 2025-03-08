import React, { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function YearDropdown({ years, selectedYear, onYearSelect }) {
  // Create a custom toggle component to handle the dropdown state
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <button
      className="btn dropdown-toggle"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      aria-haspopup="true"
      aria-expanded="false"
    >
      {children}
    </button>
  ));

  // Sort years in descending order, ensuring they are treated as numbers
  const sortedYears = [...years].map(year =>
    typeof year === 'number' ? year : parseInt(year, 10) || 0
  ).sort((a, b) => b - a);

  return (
    <div className="filter-dropdown">
      <Dropdown>
        <Dropdown.Toggle
          as={CustomToggle}
          id="dropdown-year"
        >
          {selectedYear ? `Year: ${selectedYear}` : 'Filter by Year'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => onYearSelect(null)}
            active={selectedYear === null}
          >
            All Years
          </Dropdown.Item>

          {sortedYears.map((year) => (
            <Dropdown.Item
              key={year}
              onClick={() => onYearSelect(typeof year === 'number' ? year : parseInt(year, 10) || 0)}
              active={selectedYear === year}
            >
              {year}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
