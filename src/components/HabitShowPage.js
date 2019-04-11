import React, { Component } from 'react';
import HabitDetails from './HabitDetails';
import TackledHabitList from './TackledHabitList';
import NewTackledHabitForm from './NewTackledHabitForm';
import DeleteButton from './DeleteButton';
import '../styles/page.css';
import { Habit, TackledHabit } from '../requests';

class HabitShowPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            habit: null,
            isLoading: true,
            errors: [],
        }
        this.createTackledHabit = this.createTackledHabit.bind(this);
        this.deleteHabit = this.deleteHabit.bind(this);
    }

    createTackledHabit(params){
        TackledHabit.create(this.props.match.params.id, params).then(data => {
            if (data.errors) {
                this.setState({
                    errors: data.errors
                });
            } else if (data.status === 401) {
                this.props.history.push(`/sign_in`);
            } else {
                window.location.reload()   
            }
        });
    }

    deleteHabit() {
        Habit.delete(this.state.habit.id).then(data => {
            this.props.history.push(`/habits`);
        });
    }

    componentDidMount() {
        Habit.one(this.props.match.params.id).then((habit) => {
            this.setState({
                habit: habit,
                isLoading: false,
            });
        });
    }

    render(){
        const { habit, isLoading, errors } = this.state;
        if (isLoading) {
			return (
				<main>
					<h3>Loading...</h3>
				</main>
			);
        }
        if (!habit) {
			return (
				<main>
					<h1>Habit does not exist!</h1>
				</main>
			);
        }
        return(
            <main>
                <HabitDetails {...habit}/>
                <DeleteButton onDeleteClick={this.deleteHabit}/>
                <h2>Habit Checkins</h2>
                <NewTackledHabitForm onSubmit={this.createTackledHabit} errors={errors}/>
                <TackledHabitList tackled_habits={habit.tackled_habits} />

            </main>
        );
    }
}

export default HabitShowPage;