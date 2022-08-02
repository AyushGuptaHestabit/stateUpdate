import React from 'react';

function ChildForm(props) {
    return (
        <div>
            <textarea rows="8" className='form-control mb-5' value={props.text} onChange={(e) => props.setText(e.target.value)} />
        </div>
    )
}

export default ChildForm