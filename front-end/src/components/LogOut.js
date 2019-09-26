import React from "react";
import { Redirect } from "react-router-dom";
import { updateHeader } from '../actions';
import { connect } from 'react-redux';

const LogOut = ({ dispatch }) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    updateHeader()(dispatch);
    return <Redirect to="/login" />;
}

export default connect()(LogOut);