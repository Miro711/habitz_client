import React from 'react';
import TackledHabitDetails from './TackledHabitDetails';

function TackledHabitList(props) {    
    return(
        <ul className="no-bullets">
        {
            props.tackled_habits.map(tackled_habit => (
                <li key={tackled_habit.id}>
                    <TackledHabitDetails
                        checkins={tackled_habit.checkins}
                        user={tackled_habit.habit_tackler}
                        created_at={new Date(tackled_habit.created_at)}
                    />
                </li>
            ))
        }
    </ul>
    );
}

export default TackledHabitList;