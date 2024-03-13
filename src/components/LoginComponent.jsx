import React from "react";



// call to http://localhost:3000/auth/login
// call to http://localhost:3000/auth/signup


const LoginComponent = () => {
  
  function handleLogin(event) {
    event.preventDefault();
    const userName = document.querySelector('#usernameInput').value;
    const password = document.querySelector('#passwordInput').value;
    
    fetch('http://localhost:3000/auth/login',{
      method: 'POST',
      body: JSON.stringify({userName,password})
    });
  }
  
  function handleSignUp(event) {
    event.preventDefault();
    const userName = document.querySelector('#usernameInput').value;
    const password = document.querySelector('#passwordInput').value;
    
    fetch('http://localhost:3000/auth/signup',{
      method: 'POST',
      body: JSON.stringify({userName,password})
    });
  }
  
  return(
    <>
      <h1>Login / Sign Up</h1>

      <form>
        <input type="text" id='usernameInput' placeholder="username"/>
        <input type="password" id='passwordInput' placeholder="password"/>
        <button type='button' onClick={(e) => handleLogin(e)}>Log In</button>
        <button type='button' onClick={(e) => handleSignUp(e)}>Sign Up</button>
      </form>
    </>
  )
}

export default LoginComponent;