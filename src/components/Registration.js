import React from 'react';
  import { useDispatch } from 'react-redux';
import addUser from '../action/addUser';  
import { useHistory } from 'react-router-dom';

export default function Registration(props) {

    const history = useHistory();
    const dispatch = useDispatch();
   
    function handleClick(){
       dispatch(addUser(props.usersNameRef,props.usersEmailRef,props.usersPasswordRef));
      history.push('/account');
    }
  
    return (
        <div className="registration" >
            <h2 className="registrationsCard">Registrera dig för ett konto</h2>
            <p>Name</p>
            <input type="text"   onChange={(event)=>props.setUsersNameFunc(event.target.value)}></input>
            <p>Email</p>
            <input type="text"  onChange={ (event)=>props.setUsersEmailFunc(event.target.value)}></input>
            <p>Password</p>
            <input type="password"  name="password"  onChange={(event)=> props.setUsersPasswordFunc(event.target.value) }></input> 
            <button id="btnRegistration" onClick={ handleClick } >Sign me up!</button>
        </div>
    )
}
