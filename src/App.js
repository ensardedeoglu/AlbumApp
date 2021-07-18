import React, { useEffect, useState } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [albums, setAlbums] = useState([]);
  const abortController = new AbortController();

  useEffect(() => {
    const abortController = new AbortController;
    async function loadUsers(){
      try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users",   { signal: abortController.signal } )
        const userFromApi = await res.json()
        setUsers(userFromApi)
      }catch(error){
        if(error.name = "AbortError"){
          console.log("error")
        }else{
        throw error
      }
    }
  }
  loadUsers()
  return() => {abortController.abort()}
  },[])
  // Load data from https://jsonplaceholder.typicode.com/todos?userId=3

  useEffect(() => {
    const originalTitle = document.title
    document.title ="Awesome Album App";
    return() => {document.title = originalTitle}
  })

  return (
    <div className="App">
      <div className="left column">
        <UserList setAlbums={setAlbums} users={users} setCurrentUser={setCurrentUser} />
      </div>
      <div className="right column">
        <AlbumList albums={albums} user={currentUser} />
      </div>
    </div>
  );
}

export default App;

