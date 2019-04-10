import React, { Component } from 'react';
import { Habit } from '../requests';

class HabitIndexPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            habits: [],
            isLoading: true,
        }
    }

    componentDidMount(){
        Habit.all().then((habits) => {
            this.setState({
                habits: habits,
                isLoading: false,
            });
        });
    }

    render(){
        const { habits, isLoading } = this.state;
        if (isLoading) {
			return (
				<main>
					<h3>Loading...</h3>
				</main>
			);
        }
        if (habits.length === 0) {
			return (
				<main>
					<h1>There can be no habits if they were never created!</h1>
				</main>
			);
        }
        return(
            <main>
                <h1>My Habits</h1>
                <ul className="no-bullets">
                    {
                        habits.map(habit => (
                            <li key={habit.id}>    
                                <p>
                                    {habit.name}
                                    <br/>
                                    <small>Created {new Date(habit.created_at).toLocaleString()}</small>
                                </p>
                            </li>
                        ))
                    }    
                </ul>
            </main>
        );
    }
}

export default HabitIndexPage;