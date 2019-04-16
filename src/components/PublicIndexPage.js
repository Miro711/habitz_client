import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Habit } from '../requests';
import notes from "../assets/images/notes.jpg"

class PublicIndexPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            habits: [],
            isLoading: true,
        }
    }

    componentDidMount(){
        Habit.public().then((habits) => {
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
                <img src={notes} alt="Sticky notes" className="notes-image-background" />
                <h1 className="mx-5 text-dark text-uppercase">Public Habit Challenges</h1>
                <div className="container-fluid">
                    <div className="row mx-4">
                        {
                            habits.map(habit => (
                                <div key={habit.id} className="col-4 my-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <strong><h2><Link to={`/habits/${habit.id}`} className="text-dark text-capitalize">{habit.name}</Link></h2></strong>
                                        </div>
                                        <div className="card-body">
                                            <p>
                                                <strong> Description:</strong> { habit.description } <br />
                                                <strong> Goal: </strong> { habit.habit_type === 'Binary' ? 'Simple Yes/No per Day' : `${habit.min_or_max} ${habit.threshold} ${habit.unit}(s)/day` } <br />
                                                <strong> Target Streak (days):</strong> { habit.target_streak } <br />
                                                <strong> Created by:</strong> { habit.habit_owner.full_name || 'DELETED' } <br />
                                            </p>
                                            <small>Created {new Date(habit.created_at).toLocaleString()}</small>
                                        </div>
                                        <div className="card-footer">
                                            <Link to={`/habits/${habit.id}`} className="btn btn-success font-weight-bold">Tackle Habit</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }  
                    </div>
                </div>
            </main>
        );
    }
}

export default PublicIndexPage;