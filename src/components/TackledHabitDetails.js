import React from 'react';
import DeleteButton from './DeleteButton';
import '../styles/TackledHabitDetails.css'

function TackledHabitDetails(props) {
    return (
        <div className="TackledHabitDetails">
            <p> 
                { props.user.full_name || 'DELETED' } started tackling habit on {new Date(props.created_at).toLocaleString()} 
            </p>
            <p>
                { props.checkins.map(x => x.checkin_date+" " ) }
            </p>
            <p>
                { props.checkins.map(x => x.checkin_value+" " ) }
            </p>
            <p>
                Current Streak: {props.current_streak}
            </p>
            <DeleteButton onDeleteClick={() => props.onDeleteClick(props.id)}/>
        </div>
    );
}

export default TackledHabitDetails;