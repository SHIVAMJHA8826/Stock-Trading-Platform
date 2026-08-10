import React from 'react';

function LeftSection({
    imageURL, 
    productName, 
    productDescription, 
    tryDemo, 
    learnMore, 
    googlePlay, 
    appStore
}) {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row align-items-center text-start p-3'>
                
                {/* Left Column: Product Image */}
                <div className='col-5 p-4 text-center'>
                    <img 
                        src={imageURL} 
                        alt={productName} 
                        className='img-fluid' 
                    />
                </div>
                <div className="col-2 p-5"></div>
                {/* Right Column: Product Content & Links */}
                <div className='col-5 p-4'>
                    <h1 className='fs-2 mb-3'>{productName}</h1>
                    <p className='text-muted fs-6 lh-lg mb-4'>
                        {productDescription}
                    </p>

                    {/* Action Links */}
                    <div className='mb-4'>
                        <a href={tryDemo} className='text-decoration-none me-5'>
                            Try demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href={learnMore} className='text-decoration-none'>
                            Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>

                    {/* App Store / Play Store Badges */}
                    <div>
                        <a href={googlePlay} className='me-3'>
                            <img 
                                src='/media/images/googlePlayBadge.svg' 
                                alt='Google Play Store' 
                            />
                        </a>
                        <a href={appStore}>
                            <img 
                                src='/media/images/appstoreBadge.svg' 
                                alt='App Store' 
                            />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LeftSection;