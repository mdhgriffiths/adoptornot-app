import { Link } from 'react-router';
import FBLogin from 'components/FBLogin';

const App = ({ children }) => (
    <div className="site-wrapper-inner">
        <div className="cover-container">
            <div className="masthead clearfix">
                <div className="inner">
                    <a href="#/"><h3 className="masthead-brand">Adopt or Not</h3></a>
                    <nav className="nav nav-masthead">
                        <Link className="nav-link" activeClassName="active" to="/" onlyActiveOnIndex>Home</Link>
                        <Link className="nav-link" activeClassName="active" to="/about">About</Link>
                        <Link className="nav-link" activeClassName="active" to="/contact">Contact</Link>
                        <FBLogin className="btn btn-sm btn-primary m-l-2" icon="facebook" displayText={false} />
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
);

export default App;