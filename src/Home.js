import React from "react"
import app from "./base"
import firebase from 'firebase'



const Home = () => {

    const userId = firebase.auth().currentUser.email;
    
    return(

      <div>
        <h1>Home</h1>
        <h4>Bonjour - user verified auth firebase : {userId} </h4>
        <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
    )
      
} 

export default Home
