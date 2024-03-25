import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import bg from '../assets/ethimg1.jpg';
import Footer from '../components/Footer';
import courses from '../courses/courses.json';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import download from '../assets/dw.png';
import ReactPaginate from 'react-paginate';
import { Dialog, Transition } from '@headlessui/react';

const CourseDetailsPage = () => {
  const { id } = useParams();
  const topRef = useRef(null);
  const [user, setUsers] = useState();
  const [isOpen, setIsOpen] = useState(false); // Dialog box state

  const handleRegistration = () => {
    // Handle registration logic here
    alert('Registered for the course!');
  };

  useEffect(()=>{
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  },[])

  const handleDownload = () => {
    setIsOpen(true);
  };

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const [course, setCourse] = useState({});
  useEffect(() => {
    const c = courses.find((i) => i.id === parseInt(id));
    console.log(c);
    setCourse(c);
    const fetchurl = async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUsers(user);
        }
      });
    };
    fetchurl();
  }, []);
  const [currentPage, setCurrentPage] = useState(0); // Current page index
  const itemsPerPage = 12; // Number of items per page

  // Pagination logic
  const agendaLength = course?.agenda?.length || 0;
  const pageCount = Math.ceil(agendaLength / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentAgenda = course?.agenda?.slice(offset, offset + itemsPerPage) || [];

  return (
    <div className="">
      <Navbar />
      <div ref={topRef} className="bg px-10 py-10">
        <div className="flex flex-col h-full mt-24 md:mt-0 justify-between items-start">
          <h1 className="text-3xl font-bold mb-4 mt-10 text-left md:ml-10">{course && course.name}</h1>
          <div className="flex flex-col md:flex-row justify-center md:justify-around items-start p-6">
            <div className="md:w-1/2">
              <h1 className="font-bold text-xl mb-4 text-center">Agenda</h1>
              {course && (
              <>
              <div className="p-4 h-[39rem">
                {currentAgenda.map((item, index) => (
                  <div key={index} >
                    <p className="text-sm bg-gray-300 p-2 rounded-xl mb-2 text-gray-700 overflow-x-auto">
                      <span className="font-bold" dangerouslySetInnerHTML={{ __html: item }}></span>
                    </p>
                  </div>
                ))}
                </div>
                <div className="h-full flex items-end w-full">
                <ReactPaginate
                  previousLabel={<button className="btn">Previous</button>}
                  nextLabel={<button className="btn">Next</button>}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageChange}
                  containerClassName={'pagination'}
                  subContainerClassName={'pages pagination'}
                  activeClassName={'active'}
                  className='flex h-full justify-around items-center w-full'
                />
                </div>
              </>
            )}
            </div>
            <div className="md:w-1/2 p-4 mt-10 md:mt-0">
              <h1 className="font-bold text-xl mb-4">What You will learn in 30 days</h1>
              <div>
                <p className='font-semibold mb-2'><span className='font-bold'>Blockchain Architecture:</span> Understanding the intricacies of a distributed ledger system, including the structure of blocks and how consensus mechanisms ensure data integrity and security.</p>
                <p className='font-semibold mb-2'><span className='font-bold'>Smart Contracts and Solidity:</span> Delving deeper into smart contracts, exploring their use cases, and mastering the Solidity programming language for writing sophisticated and efficient contracts.</p>
                <p className='font-semibold mb-2'><span className='font-bold'>Integration with React.js:</span> Learning how to integrate smart contracts with React.js to build interactive and user-friendly decentralized applications (DApps).</p>
                <p className='font-semibold mb-2'><span className='font-bold'>Blockchain Security and Best Practices:</span> In-depth exploration of potential threats and vulnerabilities in blockchain systems and implementing secure coding practices to mitigate risks.</p>
                <p className='font-semibold mb-2'><span className='font-bold'>Blockchain Scalability and Interoperability:</span> Analyzing the challenges associated with blockchain scalability and understanding various solutions, as well as exploring methods for enabling cross-chain communication and atomic swaps.</p>
                <p className='font-semibold mb-2'><span className='font-bold'>Solidity Advanced Concepts:</span> Going beyond the basics of Solidity, covering inheritance, modifiers, and events to build more complex and feature-rich smart contracts.</p>
                <p className='font-semibold mb-2'><span className='font-bold'>React.js Advanced Concepts:</span> Diving into state management and hooks in React.js, enabling you to create dynamic and efficient user interfaces for DApps.</p>
                <p className='font-semibold mb-2'><span className='font-bold'>Building a DApp:</span> Practical guidance on combining Solidity and React.js to create a fully functional decentralized application, from design to deployment and testing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetailsPage;
