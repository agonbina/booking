
var makeHMmixin = require('../mixins/makeHMmixin'),
    moment = require('moment'),
    not = require('101/not')

module.exports = {

    compiled: function () {
        var vm = this

        vm.$parent.$watch('start', function (start) {
            var hour = start.hour,
                minute = start.minute

            vm.$set('start', start)

            if(!hour || !minute) {
                vm.isDisabled = true
            } else {
                vm.isDisabled = false
                vm.resetHM()
            }
        }, true)
    },

    mixins: [ makeHMmixin ],

    data: function () {
        return {
            isDisabled: true,
            hour: '',
            minute: '',
            availability: {},
            start: {}
        }
    },

    watch: {
        isDisabled: function (isDisabled) {
            if(isDisabled) {
                this.resetHM()
            }
        },

        hour: function (hour) {
            this.$parent.$set('end.hour', hour)
            this.resetM()
        },

        minute: function (min) {
            this.$parent.$set('end.minute', min)
        },

        // Calculate the availability matrix when we have a new start time
        'start.minute': function (min) {
            var start = moment(this.start),
                availability = this.$parent.availability.filter(function (interval) {
                    var end = interval[1]
                    return start.isBefore(end)
                }),
                vm = this

            if(min) {
                var bookingInterval = availability[0],
                    begin = bookingInterval[0],
                    matrix = {}

                if(not(start.isSame(begin)) && start.isAfter(begin)) {
                    bookingInterval[0] = start.add(15, 'm')
                }

                var next = bookingInterval[0],
                    end = bookingInterval[1]

                while(next.isBefore(end) || next.isSame(end)) {
                    var hour = parseInt(next.format('HH')),
                        minutes = next.format('mm'),
                        store = matrix[hour]

                    if(store) {
                        store.push(minutes)
                    } else {
                        matrix[hour] = [ minutes ]
                    }

                    next = next.add(15, 'm')
                }

                vm.$set('availability', matrix)
            }
        }
    },

    computed: {

        minutes: function () {
            return this.availability[this.hour]
        }

    },

    methods: {
        resetHM: function () {
            this.resetH()
            this.resetM()
        }
    },

    template: require('./end-time.jade'),

    replace: true

}