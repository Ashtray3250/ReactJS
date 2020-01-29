import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import ChatList from './ChatList';
import Header from './Header';
import MessageField from  './MessageField';
import '../styles/styles.css';

const Layout = () => (
    <div className ='wrapper'>        
    <header className = 'Header'/>
    <ChatList/>
    <MessageField className="message-field"/>
    </div>
  );
  
  export default Layout;

