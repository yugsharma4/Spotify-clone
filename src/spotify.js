export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirctUri = "http://localhost:3000/";

const clientId = "c15c22ffb934495d8d0b35d64052115a";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  console.log(window.location);
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // #accessToken = mysecretkey&name=yug
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirctUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
