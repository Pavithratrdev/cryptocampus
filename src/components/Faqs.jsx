import { Col, Collapse } from "antd";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

function Faqs() {
    const faq = [
        {key:1,title:"should I know coding mandatorily",content:" No, not at all. We will go through this course completely from scratch. Knowing to code is always a plus."},
        {key:2,title:"Can I take this course if I already have a full time job",content:"Yes, you can take this course at any point in your life. We just need a dedicated time of 1 hour per day."},
        {key:3,title:"will I be working with other students?",content:" Since every cohort of ours will contain only 50-60 students, for project and peer learning/discussion, we will put you in teams to work around."},
        {key:4,title:"do we have a capstone project at the end of the course?",content:"Yes, we have a capstone project at the end of the course. This is a great way for us to evaluate your individual skills."},
        {key:5,title:"What are blockchain career prospects",content:" Blockchain career prospects are promising, with opportunities in various industries like finance, supply chain, and cybersecurity."},
        {key:6,title:"is blockchain the future?",content:"Blockchain is the future. We have already seen some promising innovations in healthcare and security industries."},
        {key:7,title:"What are dapps, web3 and crypto?",content:"Dapps (decentralized applications), web3, and crypto (cryptocurrencies) are key components of blockchain technology."}
    ]
    const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="mx-auto md:p-20 p-7 mt-8">
        <h1 className="text-2xl font-bold mb-10">Frequently Asked Questions :</h1>
      {faq.map((item, index) => (
        <div
          key={index}
          className="border rounded p-4 mb-4 shadow-sm hover:shadow-md transition"
        >
          <button
            className="flex justify-between items-center w-full focus:outline-none"
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <h3 className="text-lg font-semibold">Q ){item.title}</h3>
            <svg
              className={`w-6 h-6 transition-transform ${
                index === activeIndex ? 'transform rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {index === activeIndex && (
            <p className="mt-2 py-2 border-t text-gray-700">A ){item.content}</p>
          )}
        </div>
      ))}
    </div>
    );
}

export default Faqs;