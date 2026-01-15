import React, {useContext} from 'react'
import { userContext} from "./UserContext"

function UserProfile(props) {
  const userData = useContext(userContext)
  return (
    <div style={{border: "1px solid gray", padding: "10px", margin:"10px"}}>
        <h2 style={{color: "blue"}}>{userData.name}</h2>
       <p>Age: <span style={{fontWeight: "bold"}}>{userData.age}</span></p>
       <p>Bio: {props.bio}</p>
    </div>
  )
}

export default UserProfile
