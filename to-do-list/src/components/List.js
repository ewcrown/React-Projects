import React from 'react';


const List = (props) => {
    return (
        <>
            <li>
                <div className='removeItem' onClick={()=>{
                    props.onSelect(props.id)
                }}><span>+</span></div>
                <div className='listText'>{props.text}</div>
            </li>
        </>
    )
}

export default List;  