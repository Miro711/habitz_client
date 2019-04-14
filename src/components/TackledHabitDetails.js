import React from 'react';
import DeleteButton from './DeleteButton';
import '../styles/TackledHabitDetails.css'

function TackledHabitDetails(props) {
    return (
        <>
            <div className="card-header">
                <p>
                    <h3>{props.user.full_name || 'DELETED'} </h3>
                    {/* <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: `${habit.threshold}%`}} aria-valuenow={habit.threshold} aria-valuemin="0" aria-valuemax={habit.target_streak}>
                            {habit.threshold} Wins
                        </div>
                    </div> */}
                    <small>Started tackling habit on {new Date(props.created_at).toLocaleString()}</small>
                </p>
            </div>
            <div className="card-body">
                <p>
                    {props.checkins.map(x => x.checkin_date + ", ")}
                </p>
                <p>
                    {props.checkins.map(x => x.checkin_value + ", ")}
                </p>
                <p>
                    {props.checkins.map(x => x.is_win + ", ")}
                </p>
                <p>
                    Current Streak: {props.current_streak}
                </p>
                <p>
                    Wins: {props.wins}
                </p>
            </div>
            <div className="card-footer">
                <DeleteButton onDeleteClick={() => props.onDeleteClick(props.id)} />
            </div>
        </>
    );
}

export default TackledHabitDetails;