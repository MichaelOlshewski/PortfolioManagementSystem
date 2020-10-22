import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import Navbar from '../../components/Navbar';

function Dashboard(props) {

    const onLogoutClick = e => {
        e.preventDefault();
        props.logoutUser();
    }
    
    const { user } = props.auth;

    return ( 
        <React.Fragment>
            <Navbar btnAction={onLogoutClick} name={user.name}/>
        </React.Fragment>
    );
    
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})
 
export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);