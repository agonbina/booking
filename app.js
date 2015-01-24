
/**
 * App dependencies
 */

var Vue = require('vue'),
    transitions = require('vueui-transitions')

Vue.use(transitions, { duration: 500 })


/**
 * Load the views
 */

Vue.use(require('./views/attendees'))
Vue.use(require('./views/book-room'))
Vue.use(require('./views/search'))


/**
 * Instantiate the main app view model
 */

window.app = new Vue({
    data: {
        name: 'LightLock'
    }
}).$mount('#app')