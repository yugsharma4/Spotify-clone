export const initialState = {
    user:null,
    playlists: [],
    spotify:null,
    top_artists: null,
    playing:false,
    item: null,
    discover_weekly: null,
    // token: null,
    // token : "BQB1bAh_Mf_ogPBTPKKY0iD2p-GAwr9jWkZXkJtGKPLN_Jczq_AbXmy0v_5ImO3jfeVd90WuG5Qgj2LMqzEiqQY1Z8a2lF--f9n-q7C5cMqjeaSWXoY-nPnpa7FPeEJJGI5C_ykgJO3viakIOM4g7ZePSIzDy2-ELDJ73VRb8_vPZTHEZ8SntevLgLkpgsGqhXwFdXI73Iafu8STYSkZ",
}

const reducer = (state,action) => {
   
    switch(action.type){
        case "SET_USER" :
            return {
                ...state,
                user : action.user,
            };
        case "SET_TOKEN" : 
            return {
                ...state,
                token : action.token,
            };
        case "SET_PLAYLISTS" :
            return {
                ...state,
                playlists : action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            };
        case "SET_PLAYING":
            return{
                ...state,
                playing:action.playing
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        case "SET_ITEM":
            return {
                ...state,
                item:action.item,
            };
        case "SET_TOP_ARTISTS":
            return {
              ...state,
              top_artists: action.top_artists,
            };
        default : return state;
        
    }
}

export default reducer;