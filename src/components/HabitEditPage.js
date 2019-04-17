import React, { Component } from "react";
import NewHabitForm from "./NewHabitForm";
import { Habit } from "../requests";
import track from "../assets/images/track.jpg"

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
          <main style={{paddingTop: '0px',paddingLeft: '20px',paddingRight: '20px',paddingBottom: '20px'}}>
                <img src={track} alt="Track start" className="track-image-background" />
                <div className="card mx-4 my-4" style={{width: '65%'}}>
                    <div className="card-header bg-light">
                        <h1 className="text-success text-uppercase">Edit Habit Profile</h1>
                    </div>
                    <div className="card-body">
                      <NewHabitForm
                        data={habit}
                        errors={errors}
                        onSubmit={this.updateHabit}
                      />
                    </div>
                </div>
          </main>
        );
    }
}

export default HabitEditPage;