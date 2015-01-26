
var moment = require('moment-timezone')

module.exports = {

    components: {
        'ui-datepicker': require('./components/datepicker'),
        'ui-filters': require('./components/filters'),
        'ui-rooms-list': require('./components/rooms-list'),
        'ui-timebar': require('./components/timebar')
    },

    template: require('./template.jade'),

    replace: true
}