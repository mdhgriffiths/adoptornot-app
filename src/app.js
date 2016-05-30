import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
const app = document.getElementById('app');

window.onload = () => {
    render(
        <AppContainer>
            <App />
        </AppContainer>,
        app
    );
};

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default; // eslint-disable-line global-require
        render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            app
        );
    });
}