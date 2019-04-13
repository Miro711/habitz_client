import React from 'react';
import TackledHabitDetails from './TackledHabitDetails';

function TackledHabitList(props) {    
    return(
        <>
            <div className="card mx-4">
                <div className="card-header">
                    <h1 className="text-uppercase text-success">Checkins</h1>
                </div>
                <div className="card-body">
                    {
                        props.tackled_habits.map(tackled_habit => (
                            <div className="card mx-4 mb-4" key={tackled_habit.id}>
                                <TackledHabitDetails
                                    id={tackled_habit.id}
                                    checkins={tackled_habit.checkins}
                                    user={tackled_habit.habit_tackler}
                                    created_at={new Date(tackled_habit.created_at)}
                                    onDeleteClick={(id) => props.onTackledHabitDeleteClick(id)}
                                    current_streak={tackled_habit.current_streak}
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