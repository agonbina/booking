
var moment = require('moment')

module.exports = {

    data: function () {
        return {
            start: {},
            end: {}
        }
    },

    computed: {

        room: function () {
            return this.$.selectedRoom.room
        },

        /**
         * Converts an array of 'avail' into an array of moment.js intervals
         * @returns {Array}
         */

        availability: function () {
            return this.room.avail.map(function(range) {
                var fromTo = range.split('-').map(function(time) {
                    return time.trim()
                })

                return [ fromTo[0], fromTo[1] ]
            }).map(function (interval) {
                var start = interval[0].split(':'),
                    end = interval[1].split(':')

                return [start, end].map(function (frame) {
                    return moment({ hour: frame[0], minute: frame[1] })
                })
            })
        }

    },

    components: {
        'ui-selected-room': require('./components/selected-room'),
        'ui-start-time': require('./components/start-time'),
        'ui-end-time': require('./components/end-time')
    },

    template: require('./template.jade'),

    replace: true
}