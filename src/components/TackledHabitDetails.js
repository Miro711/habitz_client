import React from 'react';
import DeleteButton from './DeleteButton';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
// import styles from '../styles/cssmodules.css';

import {Line} from "react-chartjs-2";

function TackledHabitDetails(props) {

    let start_date;
    let first_checkin_date;
    let created_date = new Date(`${props.created_at} (PT)`);
    created_date.setHours(0,0,0,0);
    if (props.checkins.length === 0) {
        start_date = new Date(created_date.getTime());
    } else {
        first_checkin_date = new Date(`${props.checkins[props.checkins.length-1].checkin_date} (PT)`);
        if (first_checkin_date <= created_date) {
            start_date = new Date(first_checkin_date.getTime());
        } else if (first_checkin_date > created_date) {
            start_date = new Date(created_date.getTime());
        }
    }

    let today_date = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate());
    let total_days = Math.round(1 + (today_date.getTime() - start_date.getTime())/1000/60/60/24);
    let losses = total_days - props.wins;
    let success_rate = props.wins / total_days * 100;

    let hit_checkins_array = props.checkins.filter(checkin => checkin.is_win === true);
    let miss_checkins_array = props.checkins.filter(checkin => checkin.is_win === false);

    let hit_dates_array = hit_checkins_array.map(checkin => new Date(`${checkin.checkin_date} (PT)`));
    let miss_dates_array = miss_checkins_array.map(checkin => new Date(`${checkin.checkin_date} (PT)`));

    let all_dates_array = [];
    let pointer_date = new Date (start_date.getTime());
    while (pointer_date <= today_date) {
        all_dates_array.push(new Date (pointer_date.getTime()));
        pointer_date.setDate(pointer_date.getDate() + 1);
    }
    let total = 0;
    let array_coordinates = all_dates_array.map((date, index) => {
        const container = {};
        container['x'] = date;
        if ( hit_dates_array.some(x => x.getDate()===date.getDate() && x.getMonth() === date.getMonth() && x.getFullYear() === date.getFullYear()) ) {
            total += 1;
        }
        container['y'] = total/(index+1)*100;
        return container;
    });

    const modifiers = {
        miss_checkins: miss_dates_array,
        hit_checkins: hit_dates_array,
    };

    const modifiersStyles = {
        miss_checkins: {
          color: 'white',
          backgroundColor: 'red',
        },
        hit_checkins: {
          color: 'white',
          backgroundColor: 'green',
        },
    };

    const options = {
        maintainAspectRation: false,
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'day',
                    // max: today_date,
                    // min: start_date
                },
                ticks: {
                    // autoSkip: false,
                    callback: (label) => label.toUpperCase(),
                    fontSize: 20,
                },
                offset: false,
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontSize: 20,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Success Rate (%)',
                    fontSize: 20,
                },
            }]
        },
        title: {
            display: true,
            text: 'Success Rate over Time',
            fontSize: 20,
        },
        legend: {
            display: true,
            labels: {
                fontSize: 20,
            }
        }
    };

    const data= {
        // labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
        label: `${props.user.full_name}`,
        borderColor: 'rgb(255, 99, 132)',
        pointRadius: 6,
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointHoverBorderWidth: 6,
        pointHoverRadius: 6,
        data: array_coordinates,
        }]
    };

    return (
        <>
            <div className="card-header">
                <p>
                    <h3>{props.user.full_name || 'DELETED'} </h3>
                    <small className="index-list">
                        Started tackling habit on {new Date(start_date.getFullYear(),start_date.getMonth(),start_date.getDate()).toDateString()}
                    </small>
                </p>
                <span className="index-list">Success Rate</span> 
                <div className="progress" style={{height: '30px'}}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated index-list" role="progressbar" style={{width: `${success_rate}%`}} aria-valuenow={success_rate} aria-valuemin="0" aria-valuemax="100">
                    {Math.round(success_rate * 100) / 100}%
                    </div>
                </div>
                <br/>
                <span className="index-list">Current Winning Streak</span> 
                <div className="progress" style={{height: '30px'}}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated index-list" role="progressbar" style={{width: `${props.current_streak/props.target_streak*100}%`}} aria-valuenow={props.current_streak} aria-valuemin="0" aria-valuemax={props.target_streak}>
                        {props.current_streak} 
                    </div>
                </div>
            </div>
            <div className="card-body">
                <p className="d-flex flex-row d-flex justify-content-between mb-4 index-list">
                    <div><strong>Total Days in Habit: </strong>{total_days}</div>
                    <div style={{color: 'green'}}><strong>Wins: </strong>{props.wins}</div>
                    <div style={{color: 'red'}}><strong>Losses: </strong>{losses}</div>
                </p>
                {/* <p>
                    {props.checkins.map(x => x.checkin_date + ", ")}<br/>
                    {props.checkins.map(x => x.checkin_value + ", ")}<br/>
                    {props.checkins.map(x => x.is_win + ", ")}
                </p> */}
                <DayPicker
                    todayButton="Go to Today"
                    numberOfMonths={Math.ceil(props.target_streak/30)}
                    initialMonth={new Date(new Date().getFullYear(),new Date().getMonth())}
                    // selectedDays={hit_dates_array}
                    modifiers={modifiers}
                    modifiersStyles={modifiersStyles}
                    // classNames={ styles }
                />
                <Line data={data} width={100} height={50} options={options} />
            </div>
            <div className="card-footer">
                <DeleteButton onDeleteClick={() => props.onDeleteClick(props.id)} />
            </div>
        </>
    );
}

export default TackledHabitDetails;