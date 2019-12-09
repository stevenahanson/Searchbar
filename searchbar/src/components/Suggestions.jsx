import React from 'react';

const Suggestions = (props) => {

    const options = props.results.map((res, id) => (
        <li key={`companies_${id}`}>
          {res.name}
        </li>
    ))
    
    return <ul>{options}</ul>
}

export default Suggestions;