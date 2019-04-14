import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
            alerts:[],
        }
        this.createTackledHabit = this.createTackledHabit.bind(this);
        this.deleteHabit = this.deleteHabit.bind(this);
        this.deleteTackledHabit = this.deleteTackledHabit.bind(this);
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
                TackledHabit.one(this.props.match.params.id, data.id).then(tackled_habit => {
                    let temp = {...this.state.habit};
                    let index = this.state.habit.tackled_habits.findIndex(tackle => tackle.id === tackled_habit.id);
                    if (index === -1) {
                        temp.tackled_habits= this.state.habit.tackled_habits.concat([tackled_habit]);
                        this.setState({habit: temp});
                    } else {
                        temp.tackled_habits = this.state.habit.tackled_habits;
                        temp.tackled_habits[index] = tackled_habit;
                        this.setState({habit: temp});
                    }
                });
            }
        });
    }

    deleteHabit() {
        Habit.delete(this.state.habit.id).then(data => {
            if (data.status === 403) {
                this.setState({
                    alerts: [{message: "Access Forbidden"}]
                });
            } else {
                this.props.history.push(`/habits`);
            }
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

    deleteTackledHabit(tackleID) {
        TackledHabit.delete(this.props.match.params.id, tackleID).then(data => {
            if (data.status === 403) {
                this.setState({
                    alerts: [{message: "Access Forbidden"}]
                });
            } else if (data.status === 200) {
                this.setState((state) => {
                    return {
                        habit: {
                            ...state.habit,
                            tackled_habits: state.habit.tackled_habits.filter((tackle)=>tackle.id !== tackleID),
                        },
                    };
                });
            }
        });
    }

    render(){
        const { habit, isLoading, errors, alerts } = this.state;
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
                {alerts.length > 0 ? (
                    <div className="FormErrors">
                        {alerts.map(e => e.message).join(", ")}
                    </div>
                ) : null}
                <div className="card mx-4 mb-5">
                    <div className="card-header">
                        <h1 className="text-uppercase text-success"> {habit.name} </h1>
                    </div>
                    <div className="card-body">
                        <HabitDetails {...habit}/>
                    </div>
                    <div className="card-footer">
                        <Link to={`/habits/${habit.id}/edit`} className="btn btn-success font-weight-bold">Edit</Link>{" "}
                        <DeleteButton onDeleteClick={this.deleteHabit} />
                    </div>
                </div>

                <NewTackledHabitForm onSubmit={this.createTackledHabit} errors={errors}/>

                <TackledHabitList habit={habit} onTackledHabitDeleteClick={this.deleteTackledHabit}/>

            </main>
        );
    }
}

export default HabitShowPage;