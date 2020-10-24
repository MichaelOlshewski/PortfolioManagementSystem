import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { MdKeyboardBackspace } from "react-icons/md";
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';
import PropTypes from "prop-types";

function Register(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors] = useState({})

    const onChange = e => {
        setName(document.getElementById("name").value);
        setEmail(document.getElementById("email").value);
        setPassword(document.getElementById("password").value);
        setPassword2(document.getElementById("password2").value);
    }

    useEffect(() => {
        console.log("component mounted")

        if (props.auth.isAuthenticated) {
            props.history.push("/dashboard")
        }

        if (props.errors) {
            setErrors(props.errors)
        }
    }, [props.auth.isAuthenticated, props.errors, props.history])

    const onSubmit = e => {
        e.preventDefault();
        
        const newUser = {
            name,
            email,
            password,
            password2
        };

        console.log(newUser)

        props.registerUser(newUser, props.history)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col s8 offset-s2">
                    <Link to="/" className="btn-flat waves-effect"><MdKeyboardBackspace /> Back To Home</Link>
                </div>
                <div className="col s12" style={{ paddingLeft: "11.250px"}}>
                    <h4>
                        <b>Register</b> below
                    </h4>
                    <p className="grey-text text-darken-1">Already have an account? <Link to="/login">Log In</Link></p>
                </div>
                <form noValidate onSubmit={onSubmit}>
                    <div className="input-field col s12">
                        <input onChange={onChange} value={name} error={errors.name} id="name" type="text" className={classnames("", { invalid: errors.name })} />
                        <label htmlFor="name">Name</label>
                        <span className="red-text">{errors.name}</span>
                    </div>
                    <div className="input-field col s12">
                        <input onChange={onChange} value={email} error={errors.email} id="email" type="email" className={classnames("", { invalid: errors.email })} />
                        <label htmlFor="email">Email</label>
                        <span className="red-text">{errors.email}</span>
                    </div>
                    <div className="input-field col s12">
                        <input onChange={onChange} value={password} error={errors.password} id="password" type="password" className={classnames("", { invalid: errors.password })} />
                        <label htmlFor="password">Password</label>
                        <span className="red-text">{errors.password}</span>
                    </div>
                    <div className="input-field col s12">
                        <input onChange={onChange} value={password2} error={errors.password2} id="password2" type="password" className={classnames("", { invalid: errors.password2 })}/>
                        <label htmlFor="password2">Confirm Password</label>
                        <span className="red-text">{errors.password2}</span>
                    </div>
                    <div className="col s12" style={{paddingLeft: "11.250px"}}>
                        <button style={{width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem"}} className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(
    mapStateToProps,
    { registerUser }
) (withRouter(Register))