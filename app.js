
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

    events: {
        'room:selected': function (room) {
            this.selectedRoom = room
            this.currentView = 'ui-book-room'
        }
    },

    data: {
        currentView: 'ui-search',
        selectedRoom: {},
        selectedDate: new Date(),
        members: [{
            name: 'Agon',
            email: 'agon_bina@hotmail.com',
            number: '0038971967828'
        }, {
            name: 'Yann Leretaille',
            email: 'yleretaille@googlemail.com',
            number: '01715480984'
        }, {
	   name: 'Torben Friehe',
	   email: 'tfriehe@gmail.com',
	   number: '015122902112'
	}]
    }

}).$mount('#app')
