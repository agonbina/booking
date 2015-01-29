
var Vue = require('vue'),
    findIndex = require('101/find-index'),
    moment = require('moment-range')

module.exports = {

    created: function () {
        // Transforms '07:00 - 09:45' into [{ hour: '07', minute: '00'}, { hour: '09', minute: '45' }]
        var availability = this.$parent.avail.map(function(range) {
            var fromTo = range.split('-').map(function(time) {
                var hm = time.trim().split(':')

                return { hour: hm[0], minute: hm[1] }
            })

            return {
                isAvailable: true,
                interval: [ fromTo[0], fromTo[1] ]
            }
        })

        this.$set('availability', availability)
        this.$set('$initialAvailability', availability.slice(0))
    },

    data: function () {
        return {
            selectedStart: '',
            selectedEnd: ''
        }
    },

    computed: {
        width: function () {
            return (100 / (this.availability.length || 1))
        }
    },

    events: {
        'startTime:changed': function (start) {
            this.selectedStart = start
        },
        'endTime:changed': function (end) {
            this.selectedEnd = end
            this.reset()
            this.update()
        }
    },

    methods: {
        reset: function () {
            this.availability = this.$data.$initialAvailability.slice(0)
        },
        update: function () {
            var vm = this,
                selectedStart = moment(vm.selectedStart),
                selectedEnd = moment(vm.selectedEnd)

            var index = findIndex(vm.availability, function (block) {
                var start = moment(block.interval[0]),
                    end = moment(block.interval[1]),
                    range = moment().range(start, end)

                return selectedStart.within(range) && selectedEnd.within(range)
            })

            var withinInterval = vm.availability[index].interval,
                start = moment(withinInterval[0]),
                end = moment(withinInterval[1]),

                before = {
                    isAvailable: true,
                    interval: [{
                        hour: start.format('HH'),
                        minute: start.format('mm')
                    }, {
                        hour: selectedStart.format('HH'),
                        minute: selectedStart.format('mm')
                    }]
                },
                current = {
                    isAvailable: false,
                    interval: [{
                        hour: selectedStart.format('HH'),
                        minute: selectedStart.format('mm')
                    }, {
                        hour: selectedEnd.format('HH'),
                        minute: selectedEnd.format('mm')
                    }]
                },
                after = {
                    isAvailable: true,
                    interval: [{
                        hour: selectedEnd.format('HH'),
                        minute: selectedEnd.format('mm')
                    }, {
                        hour: end.format('HH'),
                        minute: end.format('mm')
                    }]
                }

            if(selectedStart.isSame(start) && selectedEnd.isSame(end)) {
                vm.availability.splice(index, 1, current)
            } else if(selectedStart.isSame(start)) {
                vm.availability.splice(index, 1, current, after)
            } else if(selectedEnd.isSame(end)) {
                vm.availability.splice(index, 1, before, current)
            } else {
                vm.availability.splice(index, 1, before, current, after)
            }
        }
    },

    template: require('./timebar.jade'),

    replace: true
}