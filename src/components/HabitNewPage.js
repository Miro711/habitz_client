import React, { Component } from 'react';
import { Habit } from '../requests';
import NewHabitForm from './NewHabitForm';
import track from "../assets/images/track.jpg"

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
            <main style={{paddingTop: '0px',paddingLeft: '20px',paddingRight: '20px',paddingBottom: '20px'}}>
                <img src={track} alt="Track start" className="track-image-background" />
                <div className="card mx-4 mb-4" style={{width: '65%'}}>
                    <div className="card-header bg-light">
                        <h1 className="text-success text-uppercase">New Habit Profile</h1>
                    </div>
                    <div className="card-body">
                        <NewHabitForm onSubmit={this.createHabit} errors={errors} data={{}} />
                    </div>
                </div>
            </main>
        );
    }
}

export default HabitNewPage;