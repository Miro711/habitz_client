import React, { Component } from 'react';
import { Habit } from '../requests';
import NewHabitForm from './NewHabitForm';

class HabitNewPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            errors: [],
        };
        this.createHabit = this.createHabit.bind(this);
    }

    createHabit(params) {
        Habit.create(params)
            .then((data) => {
                if (data.errors) {
                    this.setState({
                        errors: data.errors
                    });
                } else {
                    this.props.history.push(`/habits/${data.id}`);
                }
            });
    }

    render(){
        const { errors = [] } = this.state;
        return(
            <main>
                <h1>Create a Habit</h1>
                <NewHabitForm onSubmit={this.createHabit} errors={errors} />
            </main>
        );
    }
}

export default HabitNewPage;