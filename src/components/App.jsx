import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import SignIn from './SingIn.js';
import Formulario from './Formulario.js';
import Chatcontainer from './Chatcontainer.js';
import ConversationDetails from './ConversationDetails.js';
import ConversationsList from './ConversationsList.js';


function App() {
  return (
   <SignIn />
   <Signup />
   <ConversationsList />
   <ConversationDetails />
   <ChatContainer />
   <Formulario />
   <SearchBar />
   <UserProfile />
 
  );
}

export default App;

