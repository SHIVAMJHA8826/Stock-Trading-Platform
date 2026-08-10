import React from 'react';

function Education() {
    return ( 
        <div className='container p-3 mt-5'>
            <div className='row p-5 align-items-center'>
                
                {/* Left Column: Index / Varsity Image */}
                <div className='col-6 p-4 text-center'>
                    <img 
                        src='/media/images/education.svg' 
                        alt='Education Varsity' 
                        className='img-fluid' 
                        style={{ width: "80%" }} 
                    />
                </div>

                {/* Right Column: Content & Links */}
                <div className='col-6 p-4 text-start'>
                    <h1 className='fs-2 mb-3'>Free and open market education</h1>

                    <p className='text-muted mb-2'>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href='#' className='text-decoration-none d-inline-block mb-4'>
                        Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>

                    <p className='text-muted mb-2'>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a href='#' className='text-decoration-none'>
                        TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Education;