import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';



export default function Login() {
  const history = useHistory();


  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleLogin = (event) => {
    event.preventDefault();

  
  };

  useEffect(() => {
    document.title = 'Login - Funn';
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img 
        src="https://images.unsplash.com/photo-1574509227230-7a1213fd5e46?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
        alt="" />
      </div>
      <div className="ml-4 flex flex-col w-4/5">
        <div className="flex flex-col items-center bg-white p-4 border-4 border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <p>Welcome to Funn</p>
          </h1>

          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleLogin}>
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={(e) => setEmailAddress(e)}
              value={emailAddress}
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-black w-full rounded h-8 font-bold
            ${isInvalid && 'opacity-50'}`}
            >
              Login
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border-4 border-gray-primary">
          <p className="text-sm">
            Don't have an account?
            <Link to={"/"} className="font-bold text-blue-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
