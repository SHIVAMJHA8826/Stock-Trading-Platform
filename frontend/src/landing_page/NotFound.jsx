import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <div className='col-12 p-5'>
                    <h1 className='mt-5 fs-2 mb-3'>404 Not Found</h1>
                    
                    <p className='text-muted fs-5 mb-4'>
                        Sorry, the page you are looking for does not exist or has been moved.
                    </p>

                    <Link 
                        to="/" 
                        className='p-2 btn btn-primary fs-5 mb-5' 
                        style={{ width: "20%", margin: "0 auto" }}
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;