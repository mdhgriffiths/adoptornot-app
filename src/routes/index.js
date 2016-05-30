export default {
    component: require('../components/App'),
    childRoutes: [{
        path: '/',
        indexRoute: {
            component: require('../screens/main')
        },
        childRoutes: [{
            path: 'about',
            component: require('../screens/about')
        }, {
            path: 'contact',
            component: require('../screens/contact')
        }]
    }]
};