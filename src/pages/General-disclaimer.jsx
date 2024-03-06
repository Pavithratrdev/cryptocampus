import React from 'react'
import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
    return (
      <div className="container mx-auto py-8">
          <Navbar></Navbar>
        <h1 className="text-5xl font-semibold mb-4 text-center mt-20 bg-sky-50 p-9" >General Disclaimer</h1>
        <h2><b>Disclaimer:</b></h2>
        <p>The information provided on the Crypto Campus website is for educational purposes only. We strive to offer accurate and up-to-date content, but we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability concerning the website or the information, products, services, or related graphics contained on the website for any purpose.</p><br />
        <p>Any reliance you place on such information is strictly at your own risk. In no event will Crypto Campus be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of or in connection with the use of this website.</p><br />
        <p>Through this website, you can link to other websites that are not under the control of Crypto Campus. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p><br />
      </div>
        );
};

export default PrivacyPolicy;