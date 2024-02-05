import { Link } from 'react-router-dom';
import profile from '../assets/teaching.png'

function Why() {
    return ( 
        <div className="p-10">
            <h1 className='text-center font-bold text-3xl'>Why choose this course over others ?</h1>
            <div className='flex flex-col md:flex-row justify-around items-center'>
                <img src={profile} className="w-64 rounded-xl" />
                <div className="md:w-[50%] mt-10">
                    <h1 className="font-semibold text-center md:text-left text-gray-600 text-xl mb-7">Our lectures are designed to foster active learning and engagement, ensuring you stay fully immersed in the material. You'll be quizzed regularly on the content, and for every achievement, you'll earn badges as a testament to your progress. </h1>
                    <p className='text-xl font-semibold text-gray-600 text-center md:text-left'>Throughout the course, you'll be part of a close-knit cohort, learning alongside your peers. This collaborative environment encourages the formation of lasting friendships and potential co-founder connections, mirroring the spirit of a hackathon. </p>
                </div>
            </div>
        </div>
    );
}

export default Why;