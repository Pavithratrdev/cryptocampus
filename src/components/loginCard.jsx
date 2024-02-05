import { Link } from 'react-router-dom';
import bg from '../assets/bg1.jpg'

function LoginCard({ email, setEmail, password, setPassword, login, loading }) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex md:flex-row flex-col-reverse md:w-[50vw] w-[70vw] bg-gray-200 md:h-[80vh] rounded-xl">
          <div className="backdrop-blur-lg p-6 md:w-1/2 md:h-full h-1/2 md:rounded-l-xl rounded-t-xl">
            <h1 className="text-left mb-5 font-bold text-3xl">Login</h1>
            <div>
              <label className="font-bold mb-2 block">Email</label>
              <input type="email" placeholder="Email" value={email} name="email" className="input" onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div>
              <label className="font-bold mb-2 mt-4 block">Password</label>
              <input type="password" placeholder="Password" value={password} name="password" className="input mb-" onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <button className="btn mb-3" onClick={login}>
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
                </div>:<span>Login</span>}
            </button>
            <div>
              <p>Dont Have an account? <Link to='/register' className="text-blue-500">Register</Link></p>
            </div>
          </div>
          <div className="md:w-1/2 md:h-full h-1/2">
            <img src={bg} className="h-full w-full rounded-r-xl" alt="Background" />
          </div>
        </div>
      </div>
    );
  }
  
  export default LoginCard;
  