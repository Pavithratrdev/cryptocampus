import { Link } from 'react-router-dom';
import eth from '../assets/ethimg1.jpg'
import reg from '../assets/reg.svg';
import courses from '../courses/courses.json'

function Course() {
    return ( 
        <div className='p-10'>
            <h1 className="text-2xl text-center mt-10 font-bold mb-7">Who Is This Course For?</h1>
            <div className='flex justify-center items-center'>
                <div className='p-10 rounded-xl bg-[#C181F7] text-white'>
                    <h1 className='mb-5 font-bold text-2xl'>Existing Software Engineer : </h1>
                    <ul className='font-semibold ml-2'><li>You are a highly experienced software engineer with over 3 years of expertise, driven to transition into a full-time role as a blockchain developer or potentially venture into entrepreneurship as a founder.</li></ul>

                    <h1 className='mb-5 font-bold text-2xl mt-5'>Fresher Engineer : </h1>
                    <ul className='font-semibold ml-2'><li>With 1-2 years of professional software engineering experience, you are an ambitious individual enthusiastic about securing a full-time position as a blockchain developer.</li></ul>
                    <h1 className='mb-5 font-bold text-2xl mt-5'>Students : </h1>
                    <ul className='font-semibold ml-2'><li>For the innovative minds quenching hard for a crytopreneurial career.</li></ul>
                </div>
            </div>
        </div>
    );
}

export default Course;