import React from 'react';

function DeleteButton(props) {
    return (
        <button
            onClick={props.onDeleteClick}
        >
            Delete
        </button>
    );
}

export default DeleteButton;