import React, { Component } from "react";
import FormErrors from "./FormErrors";
import { User } from '../requests';

class SignUpPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            errors: []
        };
        this.createUser = this.createUser.bind(this);
    }

    createUser(event){
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        User.create({
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation')
        }).then(data => {
            if (data.errors) {
                this.setState({
                    errors: data.errors
                });
            } else {
                if (typeof this.props.onSignUp === "function") {
                    this.props.onSignUp();
                }
                this.props.history.push(`/`);
            }
        });
    }

    render() {
        const { errors } = this.state;
        return(
            <main>
                <h1>Sign Up</h1>
                <form onSubmit={this.createUser}>
                    <div>
                        <label htmlFor="first_name">First Name</label> <br />
                        <FormErrors errors={errors} forField="first_name"/>
                        <input type="text" name="first_name" id="first_name" />
                    </div>
                    <div>
                        <label htmlFor="last_name">Last Name</label> <br />
                        <FormErrors errors={errors} forField="last_name"/>
                        <input type="text" name="last_name" id="last_name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label> <br />
                        <FormErrors errors={errors} forField="email"/>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label> <br />
                        <FormErrors errors={errors} forField="password"/>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div>
                        <label htmlFor="password_confirmation">Password Confirmation</label> <br />
                        <FormErrors errors={errors} forField="password_confirmation"/>
                        <input type="password" name="password_confirmation" id="password_confirmation" />
                    </div>
                    <input type="submit" value="Sign Up" />
                </form>
            </main>
        );
    }
}

export default SignUpPage;