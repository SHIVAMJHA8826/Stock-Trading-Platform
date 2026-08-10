import React from 'react';

function Footer() {
    return ( 
        <footer className="border-top bg-light pt-5 pb-4">
            <div className="container">
                
                {/* Upper Footer: Logo & Navigation Columns */}
                <div className="row text-start mb-5">
                    
                    {/* Brand Column */}
                    <div className="col-3">
                        <img 
                            src="/media/images/logo.svg" 
                            alt="Zerodha Logo" 
                            style={{ width: "50%" }} 
                            className="mb-3"
                        />
                        <p className="text-muted text-small mb-3" style={{ fontSize: "0.85rem" }}>
                            © 2010 - 2026, Zerodha Broking Ltd.<br />All rights reserved.
                        </p>
                        
                        {/* Social Links */}
                        <div className="text-muted fs-5">
                            <a href="#" className="text-muted me-3"><i className="fa fa-twitter"></i></a>
                            <a href="#" className="text-muted me-3"><i className="fa fa-facebook-square"></i></a>
                            <a href="#" className="text-muted me-3"><i className="fa fa-instagram"></i></a>
                            <a href="#" className="text-muted me-3"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>

                    {/* Company Column */}
                    <div className="col-3">
                        <p className="fw-semibold mb-3">Company</p>
                        <ul className="list-unstyled text-muted" style={{ fontSize: "0.9rem", lineHeight: "2" }}>
                            <li><a href="#" className="text-decoration-none text-muted">About</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Products</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Pricing</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Referral programme</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Careers</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Zerodha.tech</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Press & media</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Zerodha Cares (CSR)</a></li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div className="col-3">
                        <p className="fw-semibold mb-3">Support</p>
                        <ul className="list-unstyled text-muted" style={{ fontSize: "0.9rem", lineHeight: "2" }}>
                            <li><a href="#" className="text-decoration-none text-muted">Contact us</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Support portal</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Z-Connect blog</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">List of charges</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Downloads & resources</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Videos</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Market overview</a></li>
                        </ul>
                    </div>

                    {/* Account Column */}
                    <div className="col-3">
                        <p className="fw-semibold mb-3">Account</p>
                        <ul className="list-unstyled text-muted" style={{ fontSize: "0.9rem", lineHeight: "2" }}>
                            <li><a href="#" className="text-decoration-none text-muted">Open an account</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Fund transfer</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">60 day challenge</a></li>
                        </ul>
                    </div>

                </div>

                {/* Lower Footer: Regulatory & Legal Disclaimer */}
                <div className="row text-start text-muted" style={{ fontSize: "0.75rem", lineHeight: "1.6" }}>
                    <div className="col-12">
                        <p className="mb-2">
                            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you read the Risk Disclosure Document as prescribed by SEBI | ICF
                        </p>
                        <p className="mb-2">
                            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances.
                        </p>
                        <p className="mb-2">
                            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                        </p>
                        <p className="mb-0">
                            Attention investors: 1) Stock Brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your Securities / MF / Bonds in the consolidated account statement issued by NSDL/CDSL every month.
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;