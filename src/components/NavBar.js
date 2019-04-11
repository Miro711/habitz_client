import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
	const { currentUser, onSignOut } = props;

	const handleSignOutClick = event => {
		event.preventDefault();
		if (typeof onSignOut === "function") {
			onSignOut();
		}
	}

	return (
		<nav
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				padding: '10px 30px',
			}}
		>
            <NavLink to="/">Home</NavLink>
			<NavLink to="/habits/new">New Habit</NavLink>
			<NavLink to="/habits">My Habits</NavLink>
			<NavLink to="/habits/index_public">Public Habit Challenges</NavLink>
			{!currentUser && (
				<>
					<NavLink to="/sign_in">Sign In</NavLink>
					<NavLink to="/sign_up">Sign Up</NavLink>

				</>
			)}
			{currentUser && (
				<>
					<span>{currentUser.full_name}</span>
					<a href="#boo" onClick={handleSignOutClick}>
            			Sign Out
          			</a>
				</>
			)}
		</nav>
	);
}

export default NavBar;