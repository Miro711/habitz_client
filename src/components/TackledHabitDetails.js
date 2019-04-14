import React from 'react';
import DeleteButton from './DeleteButton';
import '../styles/TackledHabitDetails.css'

function TackledHabitDetails(props) {

    let start_date;
    let first_checkin_date;
    let created_date = new Date(`${props.created_at}`+' (PT)');
    created_date.setHours(0,0,0,0);
    if (props.checkins.length === 0) {
        start_date = created_date;
    } else {
        first_checkin_date = new Date(`${props.checkins[props.checkins.length-1].checkin_date}`+' (PT)');
        if (first_checkin_date <= created_date) {
            start_date = first_checkin_date;
        } else if (first_checkin_date > created_date) {
            start_date = created_date;
        }
    }

    let today_date = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate());
    let total_days = 1 + (today_date.getTime() - start_date.getTime())/1000/60/60/24;
    let losses = total_days - props.wins;
    let success_rate = props.wins / total_days * 100;
    
    return (
        <>
            <div className="card-header">
                <p>
                    <h3>{props.user.full_name || 'DELETED'} </h3>
                    <small>Started tackling habit on {new Date(start_date.getFullYear(),start_date.getMonth() , start_date.getDate())
.toDateString()}</small>
                </p>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: `${success_rate}%`}} aria-valuenow={success_rate} aria-valuemin="0" aria-valuemax="100">
                        {success_rate}%
                    </div>
                </div>
                <br/>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: `${props.current_streak/props.target_streak*100}%`}} aria-valuenow={props.current_streak} aria-valuemin="0" aria-valuemax={props.target_streak}>
                        Streak of {props.current_streak} Win(s)
                    </div>
                </div>
            </div>
            <div className="card-body">
                <p>
                    Total Days in Habit: {total_days} <br/>
                    Wins: {props.wins} <br/>
                    Losses: {losses} <br/>
                    Success Rate: {success_rate}% <br/>
                </p>
                <p>
                    Current Streak: {props.current_streak}
                </p>
                <p>
                    {props.checkins.map(x => x.checkin_date + ", ")}<br/>
                    {props.checkins.map(x => x.checkin_value + ", ")}<br/>
                    {props.checkins.map(x => x.is_win + ", ")}
                </p>
            </div>
            <div className="card-footer">
                <DeleteButton onDeleteClick={() => props.onDeleteClick(props.id)} />
            </div>
        </>
    );
}

export default TackledHabitDetails;