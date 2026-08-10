import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='Largest Broker Award'/>
                </div>
                <div className='col-6 p-4 text-start'>
                    <h1 className='fs-2 mb-1'>Largest stock broker in India</h1>
                    <p className='mb-4'>2+ million Zerodha clients contribute to over 15% of the Indian retail trading volume in daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>                
                        <ul>
                        <li>
                            <p>Future and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                    </ul>
                        </div>
                        <div className='col-6'>                
                    <ul>
                    <li>
                        <p>Stocks & IPOs</p>
                    </li>
                    <li>
                        <p>Direct mutual funds</p>
                    </li>
                    <li>
                        <p>Bonds and Govt. Securities</p>
                    </li>
                </ul>
                        </div>
                    </div>
                        <img src='/media/images/pressLogos.png' alt='Press Logos' style={{ width: "90%" }} className='mt-3' />
                </div>
            </div>
        </div>
     );
}

export default Awards;