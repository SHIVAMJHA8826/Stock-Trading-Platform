import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5'>
            {/* Header Text */}
            <div className='text-center p-5'>
                <h1 className='fs-3 fw-semibold text-dark mb-3'>The Zerodha Universe</h1>
                <p className='text-muted fs-6'>
                    Extend your trading and investment experience even further with our partner platforms
                </p>
            </div>

            {/* Partner Cards Grid */}
            <div className='row text-center p-3'>
                
                {/* Zerodha Fund House */}
                <div className='col-4 p-4'>
                    <img src='/media/images/zerodhaFundhouse.png' alt='Zerodha Fundhouse' style={{ width: "60%" }} className='mb-3' />
                    <p className='text-muted text-small fs-7 px-3'>
                        Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
                    </p>
                </div>

                {/* Sensibull */}
                <div className='col-4 p-4'>
                    <img src='/media/images/sensibullLogo.svg' alt='Sensibull' style={{ width: "60%" }} className='mb-3' />
                    <p className='text-muted text-small fs-7 px-3'>
                        Options trading platform that lets you create strategies, analyze positions, and examine currency price movements.
                    </p>
                </div>

                {/* Tijori */}
                <div className='col-4 p-4'>
                    <img src='https://zerodha.com/static/images/partners/tijori.svg' alt='Tijori' style={{ width: "50%" }} className='mb-3' />
                    <p className='text-muted text-small fs-7 px-3'>
                        Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
                    </p>
                </div>

                {/* Streak */}
                <div className='col-4 p-4 mt-4'>
                    <img src='/media/images/streakLogo.png' alt='Streak' style={{ width: "50%" }} className='mb-3' />
                    <p className='text-muted text-small fs-7 px-3'>
                        Systematic trading platform that allows you to create and backtest strategies without coding.
                    </p>
                </div>

                {/* Smallcase */}
                <div className='col-4 p-4 mt-4'>
                    <img src='/media/images/smallcaseLogo.png' alt='Smallcase' style={{ width: "60%" }} className='mb-3' />
                    <p className='text-muted text-small fs-7 px-3'>
                        Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
                    </p>
                </div>

                {/* Ditto */}
                <div className='col-4 p-4 mt-4'>
                    <img src='/media/images/dittoLogo.png' alt='Ditto' style={{ width: "40%" }} className='mb-3' />
                    <p className='text-muted text-small fs-7 px-3'>
                        Personalized advice on life and health insurance. No spam and no mis-selling.
                    </p>
                </div>

            </div>

            {/* Bottom Call To Action */}
            <div className='text-center my-5'>
                <button 
                    className='p-2 btn btn-primary fs-5 fw-semibold mb-5' 
                    style={{ width: "20%", margin: "0 auto" }}
                >
                    Sign up for free
                </button>
            </div>
        </div>
    );
}

export default Universe;