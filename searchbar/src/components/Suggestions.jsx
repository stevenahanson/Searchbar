import React from 'react';

const Suggestions = (props) => {

    console.log('props inside suggestions ', props)

    const options = props.results.map((res, id) => (
        <li key={id}>
          {res.name}
        </li>
    ))
    
    return <ul>{options}</ul>
}

export default Suggestions;