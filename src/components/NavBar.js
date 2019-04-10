import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
	const { currentUser } = props;
	return (
		<nav
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				padding: '10px 30px',
			}}
		>
            <NavLink to="/">Home</NavLink>
			<NavLink to="/habits">My Habits</NavLink>
			{!currentUser && <NavLink to="/sign_in">Sign In</NavLink>}
			{currentUser && <span>{currentUser.full_name}</span>}
		</nav>
	);
}

export default NavBar;