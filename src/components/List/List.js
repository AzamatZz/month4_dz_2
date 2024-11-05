import React from 'react';
import '../../App.css'
const List = ({title, id}) => {

    return (
        <div className='card' >
           <span>{id}</span>
            <p>{title}</p>
        </div>
    );
};

export default List;