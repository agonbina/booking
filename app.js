
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
            name: 'Mike Hahm',
            email: 'mike.hahm@konicaminolta.eu',
            number: '015164954490',
	    avatar: 'profile_imgs/mike.jpg'
        }, {
            name: 'Yann Leretaille',
            email: 'yl@1aim.com',
            number: '01715480984',
	    avatar: 'profile_imgs/one1.jpg'
        }, {
	   name: 'Torben Friehe',
	   email: 'tf@1aim.com',
	   number: '015122902112',
	   avatar: 'profile_imgs/one2.jpg'
	}]
    }

}).$mount('#app')
