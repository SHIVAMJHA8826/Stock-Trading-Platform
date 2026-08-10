import React from 'react';

function RightSection({
    imageURL, 
    productName, 
    productDescription, 
    learnMore
}) {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row align-items-center text-start p-3'>
                
                {/* Left Column: Product Content & Links */}
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-3'>{productName}</h1>
                    <p className='text-muted fs-6 lh-lg mb-4'>
                        {productDescription}
                    </p>

                    <div>
                        <a href={learnMore} className='text-decoration-none'>
                            Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                {/* Right Column: Product Image */}
                <div className='col-6 p-4 text-center'>
                    <img 
                        src={imageURL} 
                        alt={productName} 
                        className='img-fluid' 
                    />
                </div>

            </div>
        </div>
    );
}

export default RightSection;