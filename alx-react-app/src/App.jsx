import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function App() {
  

  return (
    <>
      WelcomeMessage, <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile name="Merit" age="24" bio="a firm believer"/>
      <Footer />
    </>
  )
}

export default App
