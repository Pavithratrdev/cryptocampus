import { Link } from 'react-router-dom';
import bg from '../assets/bg.jpg';

function HeroSec() {
    return ( 
        <div className="h-[100vh] backdrop-blur-md flex justify-start items-center p-9">
            <div className="md:w-1/3 z-40">
                <p className="w font-bold md:text-3xl text-2xl">Unleash the Power of  <span className="font-extrabold text-transparent md:text-3xl text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Web3: </span> Elevate Your Skills in just 45 days with Hands-On Mastery and Pioneer the Future of the Internet!</p>
                <Link to="/register-course" className="button w-48 mt-7">
                    Register Now
                    <div class="arrow-wrapper">
                        <div class="arrow"></div>
                    </div>
                </Link>
            </div>
            <img
                className="blur-sm md:blur-none absolute top-0 left-0 w-full h-[100vh] object-cover"
                src={bg}
                alt="Background"
            />
        </div>
    );
}

export default HeroSec;