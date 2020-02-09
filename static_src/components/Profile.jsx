import React from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";

class Profile extends React.Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
     };

    render() {
        const { username, email, phone } = this.props;
        return (
           <div>
               <h1>Профиль</h1>
               <div>{ username }</div>
               <div>{ email }</div>
               <div>{ phone }</div>
               <Link to='/'> ← Back</Link>
           </div>
       )
   }
} 

const mapStateToProps = ({ profileReducer }) => ({
    ...profileReducer,
 });

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile); 