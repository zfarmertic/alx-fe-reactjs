import React from 'react'
import './App.css'
import { UserContext } from './components/UserContext'
import ProfilePage from './components/ProfilePage'
function App() {
    const userData = {
    name: "Alex Smith",
    email: "alex@example.com",
    role: "Administrator"
  };

  return (
    <>
     <UserContext.Provider value="userData">
        <ProfilePage />
      </UserContext.Provider>
    </>
  )
}

export default App
