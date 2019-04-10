import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthRoute from "./AuthRoute";
import WelcomePage from './WelcomePage';
import HabitShowPage from './HabitShowPage';
import HabitIndexPage from './HabitIndexPage';
import NavBar from './NavBar';
import SignInPage from './SignInPage';
import HabitNewPage from './HabitNewPage';
import { User, Session } from '../requests';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: null,
            isLoading: true,
        }
        this.getUser = this.getUser.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    signOut(){
        Session.destroy().then(() => {
            this.setState({
                currentUser: null
            });
        });
    }

    getUser(){
        User.current()
        .then(data => {
            if (typeof data.id !== "number") {
                this.setState({ isLoading: false });
            } else {
                this.setState({ currentUser: data, isLoading: false});
            }
        });
    }

    componentDidMount(){
        this.getUser();
    }

    render(){
        const { isLoading, currentUser } = this.state;

        if (isLoading) {
            return <div/>
        }

        return (
            <BrowserRouter>
                <div>
                    <NavBar currentUser={currentUser} onSignOut={this.signOut}/>
                    <Switch>
                        <Route path="/" exact component={WelcomePage} />
                        <AuthRoute isAllowed={currentUser} path="/habits/" exact component={HabitIndexPage} />
                        <AuthRoute isAllowed={currentUser} path="/habits/new" component={HabitNewPage} />
                        <AuthRoute isAllowed={currentUser} path="/habits/:id" component={HabitShowPage} />
                        <Route path="/sign_in" render={routeProps => (
                                <SignInPage onSignIn={this.getUser} {...routeProps}/>
                            )} 
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;