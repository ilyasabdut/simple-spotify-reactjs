import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Profile from "./components/Profile";
import Modali, { useModali } from "modali";

import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

function App() {
  const getHashParams = () => {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  };
  const params = getHashParams();
  const token = params.access_token;
  if (token) {
    spotifyApi.setAccessToken(token);
  }
  const [loggedIn, setLoggedIn] = useState(token ? true : false);
  const [myProfile, setMyProfile] = useState();
  const [myPlaylist, setMyPlaylist] = useState();
  const [currentPlaylist, setCurrentPlaylist] = useState();
  const [nowPlaying, setNowPlaying] = useState({
    name: "Not Checked",
    albumArt: "",
  });
  const [completeModal, toggleCompleteModal] = useModali({
    animated: true,
    title: "Are you sure?",
    message: "Deleting this user will be permanent.",
  });

  const getNowPlaying = () => {
    spotifyApi.getMyCurrentPlaybackState().then((response) => {
      setNowPlaying({
        name: response.item.name,
        albumArt: response.item.album.images[0].url,
      });
    });
  };

  const getCurrentPlaylist = (id) => {
    spotifyApi.getPlaylist(id).then(
      function (response) {
        setCurrentPlaylist(response);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  };

  const removeTrack = (id, uri) => {
    spotifyApi
      .removeTracksFromPlaylist(id, [
        {
          uri: uri,
        },
      ])
      .then(
        function (data) {
          console.log("Tracks removed from playlist!", data);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );
  };

  useEffect(() => {
    spotifyApi.getMe().then(
      function (response) {
        setMyProfile(response);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
    spotifyApi.getUserPlaylists(myProfile?.display_name).then(
      function (response) {
        setMyPlaylist(response);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="container">
        {loggedIn ? (
          <div className="row">
            <div className="col-sm-4">
              <Profile myProfile={myProfile} key={myProfile}></Profile>
              <div className="card">
                <div className="card-body">
                  <div className="card-text">
                    <div>
                      <div>Now Playing: {nowPlaying.name}</div>
                      <div>
                        <img
                          src={nowPlaying.albumArt}
                          style={{ height: 150 }}
                          alt=""
                        />
                      </div>
                      <button onClick={() => getNowPlaying()}>
                        Check Now Playing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {myProfile?.display_name}'s Playlists
                  </h5>
                  <div className="row">
                    <div className="col-sm-4">
                      {myPlaylist &&
                        myPlaylist?.items.map((playlist, index) => (
                          <div className="card">
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item">
                                <button
                                  onClick={() =>
                                    getCurrentPlaylist(playlist.id)
                                  }
                                >
                                  {playlist.name}{" "}
                                </button>
                              </li>
                            </ul>
                          </div>
                        ))}
                    </div>
                    <div className="col-sm-8">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={currentPlaylist?.images[0]?.url}
                          alt="Click on the playlist first!"
                        ></img>
                        <div className="card-body">
                          <h5 className="card-title">
                            {currentPlaylist?.name}
                          </h5>
                          <ul className="list-group list-group-flush">
                            {currentPlaylist &&
                              currentPlaylist?.tracks.items.map(
                                (track, index) => (
                                  <li className="list-group-item">
                                    {track.track.name}{" "}
                                    <button
                                      onClick={toggleCompleteModal}
                                      className="btn btn-danger"
                                    >
                                      Remove
                                    </button>
                                    <Modali.Modal {...completeModal}>
                                      <div className="container">
                                        <div className="text-center">
                                          <button
                                            className="btn btn-primary btn-md mr-1"
                                            onClick={() =>
                                              toggleCompleteModal()
                                            }
                                          >
                                            Cancel
                                          </button>{" "}
                                          <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                              removeTrack(
                                                currentPlaylist.id,
                                                track.track.uri
                                              )
                                            }
                                          >
                                            Remove Track
                                          </button>{" "}
                                        </div>
                                      </div>
                                    </Modali.Modal>
                                  </li>
                                )
                              )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <a className="btn btn-primary" href="http://localhost:8888">
            {" "}
            Login to Spotify{" "}
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
