import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5 align-items-center'>
                
                {/* Left Column: Title and Description */}
                <div className='col-4 text-start'>
                    <h1 className='fs-2 mb-3'>Unbeatable pricing</h1>
                    <p className='text-muted mb-3'>
                        We pioneered the concept of discount brokerage and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href='#' className='text-decoration-none'>
                        See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>

                {/* Empty Spacer Column for layout breathing room */}
                <div className='col-2'></div>

                {/* Right Column: Pricing Badges / Cards */}
                <div className='col-6'>
                    <div className='row text-center'>
                        
                        {/* Free Equity Badge */}
                        <div className='col border p-3 m-1 rounded'>
                            <h1 className='mb-3'>₹0</h1>
                            <p className='text-muted mb-0 fs-7'>
                                Free equity delivery and direct mutual funds
                            </p>
                        </div>

                        {/* Intraday and F&O Badge */}
                        <div className='col border p-3 m-1 rounded'>
                            <h1 className='mb-3'>₹20</h1>
                            <p className='text-muted mb-0 fs-7'>
                                Intraday and F&O
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;