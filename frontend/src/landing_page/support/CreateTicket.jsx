import React from 'react';

function CreateTicket() {
    return ( 
        <div className="container py-5">
            <h1 className="fs-4 text-muted text-start mb-5 fw-normal">
                To create a ticket, select a relevant topic
            </h1>

            <div className="row text-start lh-lg" style={{ fontSize: "0.9rem" }}>
                
                {/* Account Opening */}
                <div className="col-4 mb-5">
                    <h2 className="fs-5 fw-semibold mb-3">
                        <i className="fa fa-plus-circle me-2" aria-hidden="true"></i> Account Opening
                    </h2>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-decoration-none text-primary">Getting started</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Online</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Offline</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Charges</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Company, Partnership and HUF</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Non Resident Indian (NRI)</a></li>
                    </ul>
                </div>

                {/* Your Zerodha Account */}
                <div className="col-4 mb-5">
                    <h2 className="fs-5 fw-semibold mb-3">
                        <i className="fa fa-user-o me-2" aria-hidden="true"></i> Your Zerodha Account
                    </h2>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-decoration-none text-primary">Login credentials</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Your Profile</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Account modification and segment addition</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">CMR & DP ID</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Nomination</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Transfer and conversion of shares</a></li>
                    </ul>
                </div>

                {/* Trading and Markets */}
                <div className="col-4 mb-5">
                    <h2 className="fs-5 fw-semibold mb-3">
                        <i className="fa fa-bar-chart me-2" aria-hidden="true"></i> Trading and Markets
                    </h2>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-decoration-none text-primary">Trading FAQs</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Kite</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Margins</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Product and order types</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Corporate actions</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Kite features</a></li>
                    </ul>
                </div>

                {/* Funds */}
                <div className="col-4 mb-5">
                    <h2 className="fs-5 fw-semibold mb-3">
                        <i className="fa fa-credit-card me-2" aria-hidden="true"></i> Funds
                    </h2>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-decoration-none text-primary">Fund withdrawal</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Adding funds</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Adding bank accounts</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">eMandate</a></li>
                    </ul>
                </div>

                {/* Console */}
                <div className="col-4 mb-5">
                    <h2 className="fs-5 fw-semibold mb-3">
                        <i className="fa fa-circle-o-notch me-2" aria-hidden="true"></i> Console
                    </h2>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-decoration-none text-primary">IPO</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Portfolio</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Funds statement</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Profile</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Reports</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Referral program</a></li>
                    </ul>
                </div>

                {/* Coin */}
                <div className="col-4 mb-5">
                    <h2 className="fs-5 fw-semibold mb-3">
                        <i className="fa fa-dot-circle-o me-2" aria-hidden="true"></i> Coin
                    </h2>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-decoration-none text-primary">Understanding mutual funds</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Coin app</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Coin web</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">Transactions and reports</a></li>
                        <li><a href="#" className="text-decoration-none text-primary">National Pension Scheme (NPS)</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default CreateTicket;