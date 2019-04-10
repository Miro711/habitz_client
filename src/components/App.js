import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import HabitShowPage from './HabitShowPage';
import HabitIndexPage from './HabitIndexPage';
import NavBar from './NavBar';

function App() {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={WelcomePage} />
                    <Route path="/habits/" exact component={HabitIndexPage} />
                    <Route path="/habits/:id" component={HabitShowPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;