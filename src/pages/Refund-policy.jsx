import React from 'react'
import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
return (
    <div className="container mx-auto py-8">
     <Navbar></Navbar>
     <h1 className="text-5xl font-semibold mb-4 text-center mt-20 bg-sky-50 p-9" >Refund Policy</h1>
        <h2><b>Last Updated: Feb 03, 2024</b></h2>
        <p>Thank you for choosing Crypto Campus to be a part of your Blockchain journey. We appreciate your commitment to learning with us. Our mission is to offer world-class blockchain resources and ensure your satisfaction with our courses, certifications, and professional membership.</p>
        <br />
        <ol>
            <li>
        <h2><b>1. Course Enrollment and Refund Limitations:</b></h2>
        <p>1.1. Upon enrolling in a course with Crypto Campus, please note that, in general, once enrolled, refunds cannot be processed under any circumstances.<br />
        1.2. We want you to have a seamless learning experience. If you encounter any issues or concerns, please contact our team at [contact@¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬cryptocampus.in] for assistance before making a decision.
        </p><br />
        <h2><b>2. Exceptional Cases:</b></h2>
        <p>2.1. In exceptional cases where Crypto Campus determines that a refund may be warranted, it will be at the sole discretion of Crypto Campus.<br />
        2.2. Exceptional cases may include technical difficulties preventing access to the course, course content not as described, or other issues deemed appropriate by Crypto Campus.
        </p>
        <h2><b>3. Contact Information:</b></h2>
        <p>3.1. For any refund-related inquiries or concerns, please contact our team at                        [contact@cryptocampus.in].
        By enrolling in our courses, you acknowledge and agree to the terms of our refund policy. We appreciate your understanding and commitment to your Blockchain education with Crypto Campus.
        </p> <br />
        <p>Thank you for being a valued part of Crypto Campus!</p>
        </li>
        </ol>

        <p className="mt-8">Got any Questions? If you have any questions (or comments) concerning this Privacy Policy, you are most welcomed to send us an email to the following address: [contact@cryptocampus.in], and we will try to reply within a reasonable timeframe.</p>
        </div>
    );
};

export default PrivacyPolicy;