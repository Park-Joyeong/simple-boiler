import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/user_actions';
import { Link } from 'react-router-dom';

class RegisterLogin extends Component {

    state = {
        email: "",
        password: "",
        errors: []
    };

    displayErrors = errors => errors.map((error, i) => <p key={i}>{error}</p>);

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitForm = e => {
        e.preventDefault();

        let dataToSubmit = {
            email: this.state.email,
            password: this.state.password
        };

        if(this.isFormValid(this.state)) {
            this.setState({ errors: [] });
            this.props.dispatch(loginUser(dataToSubmit))
                .then(res => { 
                    if(res.payload.loginSuccess) {
                        this.props.history.push('/')
                    } else {
                        this.setState({
                            errors: this.state.errors.concat(
                                "Failed to log in, you can check your Email and Password"
                            )
                        });
                    }
                 });
        } else {
            this.setState({
                errors: this.state.errors.concat('Form is not valid')
            });
        }
    }

    isFormValid = ({ email, password }) => email && password;

    render() {
        return (
            <div className="container">
                <h2>Login</h2>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    name="email"
                                    value={this.state.email}
                                    onChange={e => this.handleChange(e)}
                                    id="email"
                                    type="email"
                                    className="validate"
                                />
                                <label className="active" htmlFor="email">Email</label>
                                <span
                                    className="helper-text"
                                    data-error="Type a right type email"
                                    data-success="right"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    name="password"
                                    value={this.state.password}
                                    onChange={e => this.handleChange(e)}
                                    id="password"
                                    type="password"
                                    className="validate"
                                />
                                <label className="active" htmlFor="password">Password</label>
                                <span
                                    className="helper-text"
                                    data-error="wrong"
                                    data-success="right"
                                />
                            </div>
                        </div>

                        {this.state.errors.length > 0 && (
                            <div>
                                {this.displayErrors(this.state.errors)}
                            </div>
                        )}
                        
                        <div className="row">
                            <div className="col s12">
                                <button
                                    className="btn waves-effect red lighten-2"
                                    type="submit"
                                    name="action"
                                    onClick={this.submitForm}
                                >
                                    Login
                                </button>&nbsp; &nbsp;
                                <Link to="/register">
                                    <button
                                        className="btn waves-effect red lighten-2"
                                        type="submit"
                                        name="action"
                                    >
                                        Sign up
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(RegisterLogin);