import React from 'react';
import TackledHabitDetails from './TackledHabitDetails';

function TackledHabitList(props) {    
    if (props.habit.tackled_habits.length === 0) {
        return (
            <h1 className="mx-3">Check in your first date to kickstart the habit!</h1>
        );
    }
    return(
        <>
            <div className="card mx-4">
                <div className="card-header">
                    <h1 className="text-uppercase text-success">Progress Report</h1>
                </div>
                <div className="card-body">
                    {
                        props.habit.tackled_habits.map(tackled_habit => (
                            <div className="card mx-4 mb-4" key={tackled_habit.id}>
                                <TackledHabitDetails
                                    id={tackled_habit.id}
                                    checkins={tackled_habit.checkins}
                                    user={tackled_habit.habit_tackler}
                                    created_at={new Date(tackled_habit.created_at)}
                                    onDeleteClick={(id) => props.onTackledHabitDeleteClick(id)}
                                    current_streak={tackled_habit.current_streak}
                                    wins={tackled_habit.wins}
                                    target_streak={props.habit.target_streak}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default TackledHabitList;