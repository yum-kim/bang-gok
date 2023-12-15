import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // navigate('/home');
  }, []);

  return <div>Login</div>;
};

export default Login;
