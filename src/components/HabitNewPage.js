import React, { Component } from 'react';
import { Habit } from '../requests';
import NewHabitForm from './NewHabitForm';

class HabitNewPage extends Component {
    constructor(props){
        super(props);
        this.createHabit = this.createHabit.bind(this);
    }

    createHabit(params) {
        Habit.create(params)
            .then((habit) => {
                this.props.history.push(`/habits/${habit.id}`);
            });
    }

    render(){
        return(
            <main>
                <h1>Create a Habit</h1>
                <NewHabitForm onSubmit={this.createHabit} />
            </main>
        );
    }
}

export default HabitNewPage;