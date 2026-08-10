import React from 'react';

function Brokerage() {
    return ( 
        <div className='container border-top mt-5'>
            <div className='row p-5 text-start align-items-start'>
                
                {/* Left Column: Brokerage Calculator & Details */}
                <div className='col-8 p-4'>
                    <a href="#" className='text-decoration-none'>
                        <h3 className='fs-5 text-center text-primary mb-4 fw-normal'>
                            Brokerage calculator
                        </h3>
                    </a>
                    
                    <ul className='text-muted fs-7 lh-lg ps-4' style={{ fontSize: "0.85rem" }}>
                        <li className='mb-2'>
                            Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
                        </li>
                        <li className='mb-2'>
                            Digital contract notes will be sent via e-mail.
                        </li>
                        <li className='mb-2'>
                            Physical copies of contract notes can be requested at ₹20 per contract note. Courier charges apply.
                        </li>
                        <li className='mb-2'>
                            For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
                        </li>
                        <li className='mb-2'>
                            For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
                        </li>
                        <li className='mb-2'>
                            If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
                        </li>
                    </ul>
                </div>

                {/* Right Column: List of Charges Link */}
                <div className='col-4 p-4 text-center'>
                    <a href="#" className='text-decoration-none'>
                        <h3 className='fs-5 text-primary mb-4 fw-normal'>
                            List of charges
                        </h3>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Brokerage;