import React, {useState} from 'react';
import './App.css';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
   if(username === 'user' && password === 'password'){
      setLoginStatus(true);
     
    }
    else{
      setLoginStatus(false);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Login Page</h1>
        {loginStatus? 
        <h2 >Welcome, {username}</h2> :

        loginStatus == false?
        <>
         <h2 style={{color: 'red'}}>Invalid username or password</h2>
        <form>
          <label>
            Username:
          
          </label>
          <input type="text" name="username" required={true} value={username} onChange={(e)=> setUsername(e.target.value)}/>
          <br />
          <label>
            Password:
        
          </label>
          <input type="password" name="password" required={true} value={password} onChange={(e)=> setPassword(e.target.value)}/>
          <br />
          <button type="submit" onClick={handleSubmit}> Submit </button>
        </form>
        </>
       : <form>
       <label>
         Username:
       
       </label>
       <input type="text" name="username" required={true} value={username} onChange={(e)=> setUsername(e.target.value)}/>
       <br />
       <label>
         Password:
     
       </label>
       <input type="password" name="password" required={true} value={password} onChange={(e)=> setPassword(e.target.value)}/>
       <br />
       <button type="submit" onClick={handleSubmit}> Submit </button>
     </form>

      }
        
      </header>
    </div>
  );
}

export default App;
