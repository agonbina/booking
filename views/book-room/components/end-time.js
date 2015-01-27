
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
            }
        }, true)
    },

    mixins: [ makeHMmixin ],

    data: function () {
        return {
            isDisabled: true,
            hour: '',
            minute: '',
            availability: { '7': [] },
            start: {}
        }
    },

    watch: {
        isDisabled: function (isDisabled) {
            if(isDisabled) {
                this.$hour.dropdown('restore defaults')
                this.$minute.dropdown('restore defaults')
            }
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
                var begin = availability[0][0]

                if(not(start.isSame(begin)) && start.isAfter(begin)) {
                    availability[0][0] = start.add(15, 'm')
                }

                vm.availability = {}

                availability.forEach(function (interval) {
                    var next = interval[0],
                        end = interval[1]

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
            }
        }
    },

    computed: {

        minutes: function () {
            return this.availability[this.hour]
        }

    },

    template: require('./end-time.jade'),

    replace: true

}