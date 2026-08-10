import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid bg-primary text-white py-5" style={{ backgroundColor: "#387ed1" }}>
            <div className="container py-4">
                
                {/* Header Row */}
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="fs-4 fw-semibold mb-0">Support Portal</h1>
                    <a href="#" className="text-white text-decoration-underline fs-6">Track tickets</a>
                </div>

                {/* Main Content Row */}
                <div className="row">
                    
                    {/* Left Column: Search Bar */}
                    <div className="col-7 text-start">
                        <h2 className="fs-3 fw-normal mb-4">
                            Search for an answer or browse help topics to create a ticket
                        </h2>
                        
                        <div className="input-group mb-3 bg-white rounded p-1">
                            <input 
                                type="text" 
                                className="form-control border-0 shadow-none ps-3" 
                                placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." 
                                style={{ height: "50px" }}
                            />
                            <button className="btn btn-white text-muted pe-3" type="button">
                                <i className="fa fa-search fs-5"></i>
                            </button>
                        </div>

                        {/* Quick Topic Links */}
                        <div className="d-flex flex-wrap gap-3 mt-3 fs-6">
                            <a href="#" className="text-white text-decoration-underline">Track account opening</a>
                            <a href="#" className="text-white text-decoration-underline">Track segment activation</a>
                            <a href="#" className="text-white text-decoration-underline">Intraday margins</a>
                            <a href="#" className="text-white text-decoration-underline">Kite user manual</a>
                        </div>
                    </div>

                    {/* Right Column: Featured Section */}
                    <div className="col-5 ps-5 text-start">
                        <h2 className="fs-4 fw-semibold mb-3">Featured</h2>
                        <ol className="lh-lg ps-3 fs-6">
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration-underline">
                                    Current Takeovers and Delisting - August 2026
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-decoration-underline">
                                    Latest Intraday leverages and Square-off timings
                                </a>
                            </li>
                        </ol>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;