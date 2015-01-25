
var moment = require('moment-timezone')

module.exports = {

    components: {
        'ui-datepicker': require('./components/datepicker'),
        'ui-filters': require('./components/filters'),
        'ui-rooms-list': require('./components/rooms-list')
    },

    template: require('./template.jade'),

    replace: true
}