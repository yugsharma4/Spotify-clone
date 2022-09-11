import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./components/Player";
import { useStateValue } from "./components/DataLayer";

const spotify = new SpotifyWebApi();


function App() {
  
  const [{user, token}, dispatch] = useStateValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
   
    if (_token) {
    
      dispatch({
        type: 'SET_TOKEN',
        token : _token,
      })
      
      spotify.setAccessToken(_token); //set token to Spotify API
      
      //Get User
      spotify.getMe().then(user => {
        console.log("user: " ,user)
        dispatch({
          type:"SET_USER",
          user : user,
        })
      });

      

  

      //Get User's Playlists
      spotify.getUserPlaylists().then((playlists) => {
        
        dispatch({
          type: "SET_PLAYLISTS",
          playlists : playlists,
        });
        
      });

    }
  }, []);
  return (
    <div className="app">
      {
        token ? <Player spotify={spotify}/> : <Login />
      }
      {/* Spotify logo */}
      {/* Login */}
      
    </div>
  );
}

export default App;
