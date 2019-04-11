import React from 'react';
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
        </div>
    );
}

export default TackledHabitDetails;