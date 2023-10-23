import React from 'react'
import Feedbackitem from './Feedbackitem';

function Feedbacklist({flist}) {
    if (!flist || flist.length === 0) {
        return <p>No Feedback Yet</p>;
    }
    return(
    <div>
        {flist.map((item)=> (
            <Feedbackitem key={item.id} feedbody={item}/>
        ))};
    </div>
    )
        }
    export default Feedbacklist

