

const addUser=(newName,newEmail,newPassword)=> {
    return{
        type:'ADD_USER',
        payload: {name: newName,
                  email: newEmail,
                  password: newPassword}
    }
}
export default  addUser;