import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <label htmlFor="">Podaj login :<input type="text" /><br /></label>
      <label htmlFor="">Podaj hasło:<input type="password" /><br /></label>
      <button>Zaloguj</button>
    </div>
  );
}

export default LoginPage;