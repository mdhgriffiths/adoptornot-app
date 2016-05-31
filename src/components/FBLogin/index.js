import { Component, PropTypes } from 'react';

// Asynchronously load Facebook SDK
const loadFacebookSDK = (lang) => {
    window.fbAsyncInit = () => {
        FB.init({
            // TODO: FB app key
            appId: '1094473137291835',
            version: 'v2.6',
            cookie: false,
            xfbml: true
        });
    };
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = `//connect.facebook.net/${lang}/sdk.js`;
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
};

class FBLogin extends Component {
    componentDidMount() {
        const { language } = this.props;
        loadFacebookSDK(language);
    }
    handleClick = () => {
        FB.login(this.handleStatusChange, {
            scope: 'public_profile'
        });
    };
    handleStatusChange = (response) => {
        // TODO: handle FB login resp
        console.log('!!!', response);
    };
    render() {
        const { icon, text, displayText, ...props } = this.props;
        return <a title={text} onClick={this.handleClick} {...props}>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {displayText && text}
        </a>
    }
}

FBLogin.PropTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    displayText: PropTypes.bool.isRequired,
    language: PropTypes.string.isRequired
};

FBLogin.defaultProps = {
    text: 'Log in with Facebook',
    icon: 'facebook-official',
    displayText: true,
    language: 'en_US'
};

export default FBLogin;