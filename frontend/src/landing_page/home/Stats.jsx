import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5 align-items-center'>
                
                {/* Left Column: Text & Features */}
                <div className='col-6 p-5 text-start'>
                    <h1 className='fs-2 mb-4'>Trust with confidence</h1>

                    <h2 className='fs-4 mb-1'>Customer-first always</h2>
                    <p className='text-muted mb-4'>
                        That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.
                    </p>

                    <h2 className='fs-4 mb-1'>No spam or push notifications</h2>
                    <p className='text-muted mb-4'>
                        No promises, alerts, order calls, or annoying push notifications. High quality apps that you use at your pace.
                    </p>

                    <h2 className='fs-4 mb-1'>The Zerodha universe</h2>
                    <p className='text-muted mb-4'>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>

                    <h2 className='fs-4 mb-1'>Do better with money</h2>
                    <p className='text-muted mb-4'>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>

                {/* Right Column: Image & Links */}
                <div className='col-6 p-5 text-center'>
                    <img 
                        src='/media/images/ecosystem.png' 
                        alt='Ecosystem' 
                        className='img-fluid mb-4' 
                        style={{ width: "90%" }} 
                    />
                    
                    <div className='text-center'>
                        <a href='#' className='mx-3 text-decoration-none'>
                            Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href='#' className='mx-3 text-decoration-none'>
                            Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Stats;