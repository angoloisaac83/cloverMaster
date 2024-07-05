import React from 'react';
import AppLayout from './Applayout'
import HomePage from './components/land'
import InvitePage from './components/InviteFriend'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default function App(){

  return(
    <>
    <Router>
      <AppLayout>
      </AppLayout>
    </Router>

    </>
  )
}