import React from 'react'

export default function YearDropdown({props}) {
    const { years } = props;

  return (
    <div><div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      
    </button>
    <ul className="dropdown-menu">
        {years.map((year) => {
            return <li><a className="dropdown-item" href="#">{year}</a></li>
        })}
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div></div>
  )
}
