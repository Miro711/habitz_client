import React, { Component } from "react";
import NewHabitForm from "./NewHabitForm";
import { Habit } from "../requests";

class HabitEditPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
          errors: [],
          loading: true,
          habit: null
        };

        this.updateHabit = this.updateHabit.bind(this);
    }

    loadHabit() {
        Habit.one(this.props.match.params.id).then(habit => {
          this.setState({
            habit: habit,
            loading: false
          });
        });
    }

    updateHabit(params) {
        const { habit } = this.state;
        Habit.update(habit.id, params).then(data => {
          if (data.errors) {
            this.setState({ errors: data.errors });
          } else {
            this.props.history.push(`/habits/${habit.id}`);
          }
        });
    }

    componentDidMount() {
        this.loadHabit();
    }

    render(){
        const { errors, loading, habit } = this.state;

        if (loading) {
            return (
              <main>
                <h2>Loading...</h2>
              </main>
            );
        }

        return (
            <main>
              <h1>Edit Habit</h1>
              <NewHabitForm
                data={habit}
                errors={errors}
                onSubmit={this.updateHabit}
              />
            </main>
        );
    }
}

export default HabitEditPage;