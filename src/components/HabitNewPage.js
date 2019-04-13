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
                <div class="card mx-4 my-4">
                    <div class="card-header">
                        <h1>Create a New Habit Profile</h1>
                    </div>
                    <div class="card-body">
                        <NewHabitForm onSubmit={this.createHabit} errors={errors} />
                    </div>
                </div>
            </main>
        );
    }
}

export default HabitNewPage;