import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom mb-5'>
            {/* Header Text */}
            <div className='text-center mt-5 p-5'>
                <h1 className='fs-2 text-dark fw-semibold mb-3'>
                    Pricing
                </h1>
                <h3 className='text-muted fs-5 mb-5 fw-normal'>
                    Free equity investments and flat ₹20 intraday and F&O trades
                </h3>
            </div>

            {/* Three Pricing Feature Cards */}
            <div className='row p-4 mb-5 text-center'>
                
                {/* Free Equity Delivery */}
                <div className='col-4 p-4'>
                    <img 
                        src='/media/images/pricingEquity.svg' 
                        alt='Free equity delivery' 
                        style={{ width: "70%" }} 
                        className='mb-4' 
                    />
                    <h2 className='fs-3 mb-3'>Free equity delivery</h2>
                    <p className='text-muted fs-6 lh-md px-2'>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>

                {/* Intraday & F&O Trades */}
                <div className='col-4 p-4'>
                    <img 
                        src='/media/images/intradayTrades.svg' 
                        alt='Intraday and F&O trades' 
                        style={{ width: "70%" }} 
                        className='mb-4' 
                    />
                    <h2 className='fs-3 mb-3'>Intraday and F&O trades</h2>
                    <p className='text-muted fs-6 lh-md px-2'>
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on options trades.
                    </p>
                </div>

                {/* Free Direct MF */}
                <div className='col-4 p-4'>
                    <img 
                        src='/media/images/pricingEquity.svg' 
                        alt='Free direct MF' 
                        style={{ width: "70%" }} 
                        className='mb-4' 
                    />
                    <h2 className='fs-3 mb-3'>Free direct MF</h2>
                    <p className='text-muted fs-6 lh-md px-2'>
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Hero;