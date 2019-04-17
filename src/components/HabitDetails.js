import React from 'react';

function HabitDetails(props) {
    return (
        <div>
            <p className="index-list"><strong>Description: </strong>{ props.description }</p>
            <p className="index-list"><strong> Goal: </strong> { props.habit_type === 'Binary' ? 'Simple Yes/No per Day' : `${props.min_or_max} ${props.threshold} ${props.unit}(s)/day` }</p>
            <p className="index-list"><strong>Target Streak (Days): </strong>{ props.target_streak }</p>
            <p className="index-list"><strong>Is habit public?</strong> { props.is_public === true ? 'Yes' : 'No' } </p>
            <small className="index-list">Created by: { props.habit_owner.full_name || 'DELETED' }</small>
            <p>
                <small className="index-list">Created {new Date(props.created_at).toLocaleString()}</small>
            </p>
        </div>
    );
}

export default HabitDetails;