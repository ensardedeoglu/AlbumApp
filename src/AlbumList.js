import React from "react";


function AlbumList({ albums, user = {} }) {
  if(!albums.length){
  return <p>Please click on a user name to the left</p>;
  }
  return <ul> {albums.map((album) => <li>{album.title}</li>)} </ul> 
}

export default AlbumList;
