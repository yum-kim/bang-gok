import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // navigate('/home');
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <div>
          <div>logo</div>
          <h1>Sign in</h1>
        </div>
        <div>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
          </div>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
