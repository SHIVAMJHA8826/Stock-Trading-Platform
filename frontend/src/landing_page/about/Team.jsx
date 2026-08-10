import React from 'react';

function Team() {
    return ( 
        <div className='container border-top'>
            <div className='row p-3 mt-5 text-center'>
                <h1 className='fs-2 text-muted'>People</h1>
            </div>

            <div className='row p-5 text-muted text-start align-items-center' style={{ lineHeight: "1.8" }}>
                {/* Founder Image & Title */}
                <div className='col-6 p-3 text-center'>
                    <img 
                        src='/media/images/nithinKamath.jpg' 
                        alt='Nithin Kamath' 
                        className='rounded-circle mb-3' 
                        style={{ width: "50%" }} 
                    />
                    <h4 className='mt-3 fs-5 text-dark'>Nithin Kamath</h4>
                    <p className='text-muted fs-6'>Founder, CEO</p>
                </div>

                {/* Founder Bio & Links */}
                <div className='col-6 p-3 fs-6'>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on <a href='#' className='text-decoration-none'>Homepage</a> / <a href='#' className='text-decoration-none'>TradingQnA</a> / <a href='#' className='text-decoration-none'>Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;