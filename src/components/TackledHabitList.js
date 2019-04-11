import React from 'react';
import TackledHabitDetails from './TackledHabitDetails';

function TackledHabitList(props) {    
    return(
        <ul className="no-bullets">
        {
            props.tackled_habits.map(tackled_habit => (
                <li key={tackled_habit.id}>
                    <TackledHabitDetails
                        id={tackled_habit.id}
                        checkins={tackled_habit.checkins}
                        user={tackled_habit.habit_tackler}
                        created_at={new Date(tackled_habit.created_at)}
                        onDeleteClick={(id) => props.onTackledHabitDeleteClick(id)}
                    />
                </li>
            ))
        }
        </ul>
    );
}

export default TackledHabitList;