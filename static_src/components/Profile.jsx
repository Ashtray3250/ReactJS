import React from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";



class Profile extends React.Component {
    render() {
        return (
           <div>
               <h1>Profile</h1>
               <div>Ashtray</div>
               <div>reactjs@gmail.com</div>
               <div>8 800 555 35 35</div>
               <Link to='/'> ← Back</Link>
           </div>
       )
   }
}

const mapStateToProps = ({profileReducer}) => ({
    profile: profileReducer
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);