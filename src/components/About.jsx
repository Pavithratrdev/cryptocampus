import { Link } from 'react-router-dom';
import profile from '../assets/ethimg1.jpg'

function About() {
    return ( 
        <div className="p-10">
            <h1 className='text-center font-bold text-3xl'>Why this Course ?</h1>
            <div className="flex mb-8 justify-center items-center">
                <div className="h-2 w-10 rounded-md bg-gradient-to-r from-purple-400 to-pink-600 p-1"></div>
            </div>
            <div className='flex flex-col md:flex-row justify-around items-center'>
                <img src={profile} className="w-64 rounded-xl" />
                <div className="md:w-[50%] flex flex-col justify-center md:items-start items-center mt-10">
                    <h1 className="font-bold text-center md:text-left text-2xl mb-7">Master Ethereum Dapp Development and Empower Your Journey into Web 3.0!</h1>
                    <p className='text-xl font-semibold text-gray-600 text-center md:text-left'>Through a perfect blend of self-paced learning and live lessons, you'll gain hands-on experience in crafting, developing, and scaling Web 3.0 apps on the Ethereum platform. No more struggling alone! Embrace collaboration within our vibrant community, where you'll work alongside like-minded peers and learn Ethereum apps.</p>
                    <Link to='/course/1' className="button w-[16rem] mt-7">
                        View Course & Agenda
                        <div class="arrow-wrapper">
                            <div class="arrow"></div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;