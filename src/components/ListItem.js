import React from 'react';
import './listItem.css'
import {FaTrash} from 'react-icons/fa';
import FlipMove from 'react-flip-move';


function ListItem(props){
    const items = props.items;
    const listItem = items.map( item =>
        {
            return <div className="list" key={item.key}>
                <p>
                    <input type="text" id={item.key} value={item.text} onChange={
                        (e) => {
                            props.setUpdate(e.target.value,item.key)
                        }
                    }/>
                <span>
                    <FaTrash className="faicons" onClick={() => props.deleteItem(item.key)} ></FaTrash>
                </span>
          </p>
            </div>
        }
    )
    return (
        
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {listItem}
            </FlipMove>
        </div>
    )
}

export default ListItem;