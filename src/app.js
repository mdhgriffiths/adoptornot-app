import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import './styles/app.css';

const app = document.getElementById('app');

window.onload = () => {
    render(
        <AppContainer>
            <Router history={hashHistory} routes={routes} />
        </AppContainer>,
        app
    );
};

if (module.hot) {
    module.hot.accept('./routes', () => {
        render(
            <AppContainer>
                <Router history={hashHistory} routes={require('./routes')} />
            </AppContainer>,
            app
        );
    });
}