import React from 'react';
import { NavLink } from 'react-router-dom';

// import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCog } from '@fortawesome/free-solid-svg-icons'
// library.add(faUserCog)

function NavBar(props) {
	const { currentUser, onSignOut } = props;

	const handleSignOutClick = event => {
		event.preventDefault();
		if (typeof onSignOut === "function") {
			onSignOut();
		}
	}

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<NavLink className="navbar-brand text-success font-weight-bold" to="/">
				Habitz <FontAwesomeIcon icon={faUserCog} />
			</NavLink>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          		<span className="navbar-toggler-icon"></span>
        	</button>
        	<div className="collapse navbar-collapse d-flex flex-row justify-content-end" id="navbarNavAltMarkup">
          		<ul className="navbar-nav d-flex flex-row justify-content-end align-items-center">
					<li className="nav-item mx-3">
            			<NavLink to="/" className="text-success font-weight-bold">Home</NavLink>
					</li>
					<li className="nav-item mx-3">
						<NavLink to="/habits/new" className="text-success font-weight-bold">New Habit</NavLink>
					</li>
					<li className="nav-item mx-3">
						<NavLink to="/habits" className="text-success font-weight-bold">My Habits</NavLink>
					</li>
					<li className="nav-item mx-3">
						<NavLink to="/habits/index_public" className="text-success font-weight-bold">Public Habit Challenges</NavLink>
					</li>
					{currentUser && (
						<>
							<span className="navbar-item mx-3 font-weight-bold text-white">Hello, {currentUser.full_name}</span>
							<li className="nav-item mx-3">
								<a href="#boo" onClick={handleSignOutClick} className="btn btn-success font-weight-bold">Sign Out</a>
							</li>
						</>
					)}
					{!currentUser && (
						<>
							<li className="nav-item mx-3 ">
								<NavLink to="/sign_in" className="btn btn-success mx-2 font-weight-bold">Sign In</NavLink>
								<NavLink to="/sign_up" className="btn btn-success font-weight-bold">Sign Up</NavLink>
							</li>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;