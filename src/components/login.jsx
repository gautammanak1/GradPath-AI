import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from './firebaseConfig';

const Login = ({ setUser }) => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      navigate('/Page'); // Redirect to profile page after login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex w-screen flex-wrap text-slate-800">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <a href="#" className="text-2xl font-bold text-blue-600"> Wobble . </a>
        </div>
        <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
            Welcome back <br />
            to <span className="text-blue-600">Wobble</span>
          </p>
          <p className="mt-6 text-center font-medium md:text-left">Sign in to your account below.</p>

          <div className="flex flex-col items-stretch pt-3 md:pt-8">
            <button
              onClick={handleGoogleLogin}
              className="rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2 md:w-32"
            >
              Sign in with Google
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
          <div className="py-12 text-center">
            <p className="text-gray-600">
              Don  have an account?
              <a href="#" className="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4">Sign up for free.</a>
            </p>
          </div>
        </div>
      </div>
      <div className="relative hidden h-screen select-none bg-blue-600 bg-gradient-to-br md:block md:w-1/2">
        <div className="py-16 px-8 text-white xl:w-[40rem]">
          <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">New Feature</span>
          <p className="my-6 text-3xl font-semibold leading-10">Create animations with <span className="abg-white whitespace-nowrap py-2 text-cyan-300">drag and drop</span>.</p>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt necessitatibus nostrum repellendus ab totam.</p>
          <a href="#" className="font-semibold tracking-wide text-white underline underline-offset-4">Learn More</a>
        </div>
        <img className="ml-8 w-11/12 max-w-lg rounded-lg object-cover" src="/images/aaFKzowNcgxqSdxMw11na.png" />
      </div>
    </div>
  );
};

// Define propTypes for validation
Login.propTypes = {
  setUser: PropTypes.func.isRequired
};

export default Login;
