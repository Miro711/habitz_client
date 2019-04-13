import React from 'react';

function DeleteButton(props) {
    return (
        <button
            onClick={props.onDeleteClick} className="btn btn-success font-weight-bold"
        >
            Delete
        </button>
    );
}

export default DeleteButton;