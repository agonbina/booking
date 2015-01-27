
var makeHMmixin = require('../mixins/makeHMmixin')

module.exports = {

    mixins: [ makeHMmixin ],

    data: function () {
        return {
            hour: '',
            minute: '',
            availability: {}
        }
    },

    created: function () {
        var availability = this.$parent.availability,
            vm = this

        // Creates a 'matrix' with all possible HOUR:MINUTES(15 minute intervals) combinations of the availability sets
        // Ex: '07:00' = [ '00', '15', '30' ]

        availability.forEach(function (interval) {
            var next = interval[0],
                end = interval[1].subtract(15, 'm') // Event has to end at least 15 minutes before this interval completes

            while(next.isBefore(end) || next.isSame(end)) {
                var hour = parseInt(next.format('HH')),
                    minutes = next.format('mm'),
                    store = vm.availability[hour]

                if(store) {
                    store.push(minutes)
                } else {
                    vm.availability[hour] = [ minutes ]
                }

                next = next.add(15, 'm')
            }
        })
    },

    computed: {

        minutes: function () {
            return this.availability[this.hour]
        }

    },

    watch: {
        hour: function (hour) {
            this.$parent.$set('start.hour', hour)

            // Reset 'minute' when the 'hour' changes
            this.$minute.dropdown('restore defaults')
            this.minute = ''
        },
        minute: function (min) {
            this.$parent.$set('start.minute', min)
        }
    },

    template: require('./start-time.jade'),

    replace: true

}