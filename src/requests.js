// Requests

const BASE_URL = `http://localhost:3000/api/v1`;

// Create a module of Habit related fetch request methods
const Habit = {
	// fetch all habits from server
	all() {
		return fetch(`${BASE_URL}/habits`, { credentials: 'include' }).then(
			(res) => res.json(),
		);
	},
	// fetch a single habit
	one(id) {
		return fetch(`${BASE_URL}/habits/${id}`, {
			credentials: 'include',
		}).then((res) => res.json());
	},
	// creating a habit
	create(params) {
		// `params` is an object that represents a habit
		return fetch(`${BASE_URL}/habits`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		}).then((res) => res.json());
	},
	// updating a habit
	update(id, params) {
		return fetch(`${BASE_URL}/habits/${id}`, {
			method: 'PATCH',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		}).then((res) => res.json());
	},
	// Deleting a habit
	delete(id) {
		return fetch(`${BASE_URL}/habits/${id}`, {
		  method: "DELETE",
		  credentials: "include",
		}).then(res => res.json());
	}
};

// This is a helper module with methods associated with creating
// (and maybe later, destroying) a user session
const Session = {
	create(params) {
		// `params` is an object that represents a user
		// { email: 'some@email.com', password: 'some-password' }
		return fetch(`${BASE_URL}/session`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		}).then((res) => res.json());
	},
	destroy() {
		return fetch(`${BASE_URL}/session`, {
		  method: "DELETE",
		  credentials: "include"
		}).then(res => res.json());
	}
};

const User = {
	current() {
		return fetch(`${BASE_URL}/users/current`, {
			method: "GET",
			credentials: "include"
		}).then(res => res.json());
	}
};

export { Habit, Session, User };