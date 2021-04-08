import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import addUser from '../action/addUser';  
 
export default function Account(props) {
    
    const users = useSelector((state) => { return state.usersState })
    const [changeMode, setChangeMode] = useState(false);
    const dispatch = useDispatch();
    
    function handleClickchange() {
        setChangeMode(!changeMode);
        dispatch(addUser(props.usersNameRef,props.usersEmailRef,props.usersPasswordRef));
    }
    return (
        <div>
            <h2  className="account"  >Ditt Konto</h2>
            {
                changeMode ?
                   
                        <div className="accountCreated" >
                            <p>Name</p>
                            <input type="text" defaultValue={users.name}  onChange={(event)=>props.setUsersNameFunc(event.target.value)}></input>
                            <p>Email</p>
                            <input type="text" defaultValue={users.email} onChange={ (event)=>props.setUsersEmailFunc(event.target.value)}></input>
                            <p>Password</p>
                            <input type="password"  name="password" defaultValue={users.password} onChange={(event)=> props.setUsersPasswordFunc(event.target.value) } ></input>
                            <button className="btnAccount" onClick={handleClickchange}>Spara</button>
                        </div>
                    :
                        <div className="accountCreated">
                            <p>Name</p>
                            <h2>{users.name}</h2>
                            <p>Email</p>
                            <h2>{users.email}</h2>
                            <p>Password</p>
                            <h2>{users.password}</h2>
                            <button className="btnAccount" onClick={handleClickchange}>Ändra</button>
                        </div>
                    
            }
        </div>
    )
}