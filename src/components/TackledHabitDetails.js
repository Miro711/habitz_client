import React from 'react';
import DeleteButton from './DeleteButton';
import '../styles/TackledHabitDetails.css'

function TackledHabitDetails(props) {
    let date_today = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate());

    let date_first = new Date(`${props.checkins[props.checkins.length-1].checkin_date}`+' (PT)');
    // date_first.setHours(0,0,0,0);

    let total_days = 1 + (date_today.getTime() - date_first.getTime())/1000/60/60/24;
    let losses = total_days - props.wins;
    let success_rate = props.wins / total_days * 100;

    
    return (
        <>
            <div className="card-header">
                <p>
                    <h3>{props.user.full_name || 'DELETED'} </h3>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: `${success_rate}%`}} aria-valuenow={success_rate} aria-valuemin="0" aria-valuemax="100">
                            {success_rate}%
                        </div>
                    </div>
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
                    Total Days in Habit: {total_days} <br/>
                    Wins: {props.wins} <br/>
                    Losses: {losses} <br/>
                    Success Rate: {success_rate}% <br/>
                </p>
            </div>
            <div className="card-footer">
                <DeleteButton onDeleteClick={() => props.onDeleteClick(props.id)} />
            </div>
        </>
    );
}

export default TackledHabitDetails;