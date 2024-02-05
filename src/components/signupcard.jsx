import { Link } from 'react-router-dom';
import bg from '../assets/bg1.jpg'
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

function Signup({ email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, signup, loading }) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex md:flex-row flex-col md:w-[50vw] w-[70vw] bg-gray-200 md:h-[80vh] rounded-xl">
          <div className="md:w-1/2 md:h-full h-1/2">
            <img src={bg} className="h-full w-full rounded-r-xl" alt="Background" />
          </div>
          <div className="backdrop-blur-lg p-6 md:w-1/2 md:h-full h-1/2 md:rounded-l-xl rounded-t-xl">
            <h1 className="text-left mb-5 font-bold text-3xl">Register</h1>
            <div>
              <label className="font-bold mb-2 block">Email</label>
              <input type="email" placeholder="Email" value={email} name="email" className="input" onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div>
              <label className="font-bold mb-2 mt-4 block">Password</label>
              <input type="password" placeholder="Password" value={password} name="password" className="input mb-" onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <div>
              <label className="font-bold mb-2 mt-4 block">Confirm Password</label>
              <input type="password" placeholder="Confirm Password" value={confirmPassword} name="confirmPassword" className="input mb-7" onChange={(e) => { setConfirmPassword(e.target.value) }} />
            </div>
            <button className="btn mb-3" onClick={signup}>
                {loading?<div className=''><div class="dot-spinner">
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                        <div class="dot-spinner__dot"></div>
                    </div>
                </div>:<span>Sign Up</span>}
            </button>
            <div>
              <p>Have an account? <Link to='/login' className="text-blue-500">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Signup;
  