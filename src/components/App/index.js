import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
    <div className="site-wrapper">
        <div className="site-wrapper-inner">
            <div className="cover-container">
                <div className="masthead clearfix">
                    <div className="inner">
                        <a href="#/"><h3 className="masthead-brand">Adopt or Not</h3></a>
                        <nav className="nav nav-masthead">
                            <Link className="nav-link" activeClassName="active" to="/" onlyActiveOnIndex>Home</Link>
                            <Link className="nav-link" activeClassName="active" to="/about">About</Link>
                            <Link className="nav-link" activeClassName="active" to="/contact">Contact</Link>
                            <a className="btn btn-primary btn-sm m-l-2" href="#/connect" title="Log in with Facebook">
                                <i className="fa fa-facebook" aria-hidden="true" />
                            </a>
                        </nav>
                    </div>
                </div>
                <div className="inner cover">
                    {children}
                </div>
                <div className="mastfoot">
                    <div className="inner">
                        <p>Made with ♥ by <a href="https://github.com/mdhgriffiths" target="_blank" rel="noopener noreferrer">mdhgriffiths</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default App;