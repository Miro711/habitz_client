import React from 'react';

function HabitDetails(props) {
    return (
        <div>
            {/* <h2>{props.name}</h2> */}
            <p><strong>Description: </strong>{ props.description }</p>
            <p><strong> Goal: </strong> { props.habit_type === 'Binary' ? 'Simple Yes/No per Day' : `${props.min_or_max} ${props.threshold} ${props.unit}(s)/day` }</p>
            {/* <p><strong>Threshold: </strong>{ props.threshold }</p>
            <p><strong>Unit: </strong>{ props.unit }</p>
            <p><strong>Min or max: </strong>{ props.min_or_max }</p> */}
            <p><strong>Target Streak (Days): </strong>{ props.target_streak }</p>
            {/* <p><strong>Is public: </strong>{ props.is_public.toString().charAt(0).toUpperCase() + props.is_public.toString().slice(1) }</p> */}
            <p><strong>Is habit public?</strong> { props.is_public === true ? 'Yes' : 'No' } </p>
            {/* <p><strong>Frequency: </strong>{ props.frequency }</p>
            <p><strong>Number of days: </strong>{ props.number_of_days }</p> */}
            <small>Created by: { props.habit_owner.full_name || 'DELETED' }</small>
            <p>
                <small>Created {new Date(props.created_at).toLocaleString()}</small>
            </p>
        </div>
    );
}

export default HabitDetails;