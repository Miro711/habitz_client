import React, { Component } from 'react';
import HabitDetails from './HabitDetails';
import TackledHabitList from './TackledHabitList';
import '../styles/page.css';
import { Habit } from '../requests';

class HabitShowPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            habit: null,
            isLoading: true,
        }
    }

    componentDidMount() {
        Habit.one(1).then((habit) => {
            this.setState({
                habit: habit,
                isLoading: false,
            });
        });
    }

    render(){
        const { habit, isLoading } = this.state;
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
                <h2>Checkins</h2>
                <TackledHabitList tackled_habits={habit.tackled_habits} />

            </main>
        );
    }
}

export default HabitShowPage;