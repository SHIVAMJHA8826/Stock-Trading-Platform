import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom mb-5'>
            <div className='text-center mt-5 p-5'>
                <h1 className='fs-2 text-dark fw-semibold mb-3'>
                    Technology
                </h1>
                <h3 className='text-muted fs-5 mb-4 fw-normal'>
                    Sleek, modern, and intuitive trading platforms
                </h3>
                <p className='text-muted fs-6 mb-5'>
                    Check out our{' '}
                    <a href="#" className="text-decoration-none fw-medium">
                        investment offerings{' '}
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Hero;