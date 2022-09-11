export const initialState = {
    user:null,
    playlists: [],
    playing:false,
    item: null,
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
            }
        default : return state;
        
    }
}

export default reducer;