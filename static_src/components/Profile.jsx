import React from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
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