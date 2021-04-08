let initialState= {
    usersState: {}
}
const userReduser = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_USER':
            return {
                usersState: action.payload
            }
        default :
            return state;
    }
}
export default userReduser;