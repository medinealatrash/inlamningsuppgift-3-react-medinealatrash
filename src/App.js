import Registration from './components/Registration';
import Account from './components/Account'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Error from './components/Error'

function App() {

  const [usersName, setUsersName] = useState('');
  const [usersEmail, setUsersEmail] = useState('');
  const [usersPassword, setUsersPassword] = useState('');

  return (
    <div className="App">
      <div className="top">
        <h2  >Välkommen!</h2>
      </div>
      <div className="bottom" >
        <Switch >
          <Route path="/" exact >
            < Registration
              setUsersNameFunc={setUsersName}
              setUsersEmailFunc={setUsersEmail}
              setUsersPasswordFunc={setUsersPassword}
              usersNameRef={usersName}
              usersEmailRef={usersEmail}
              usersPasswordRef={usersPassword}
            />
          </Route>
          <Route path="/account" >
            < Account
              setUsersNameFunc={setUsersName}
              setUsersEmailFunc={setUsersEmail}
              setUsersPasswordFunc={setUsersPassword}
              usersNameRef={usersName}
              usersEmailRef={usersEmail}
              usersPasswordRef={usersPassword}
            />
          </Route>
          <Route component={ Error} />
        </Switch>

      </div>
    </div>
  );
}

export default App;

