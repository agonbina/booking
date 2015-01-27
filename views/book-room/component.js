
var moment = require('moment'),
    request = require('superagent')

module.exports = {

    data: function () {
        return {
            start: {},
            end: {},
            title: '',
            description: '',

            isSubmitting: false,
            eventCreated: false,
            errors: []
        }
    },

    methods: {
        validate: function () {
            var vm = this,
                errors = []

            if(vm.title === '') errors.push('Event Title is empty')
            if(vm.description === '') errors.push('Event Description is empty')
            if(!vm.start.hour || !vm.start.minute) errors.push('Start Time is invalid')
            if(!vm.end.hour || !vm.end.minute) errors.push('End Time is invalid')

            vm.$set('errors', errors)
        },

        submit: function (e) {
            var vm = this
            var data = {
                booking: {
                    date: vm.date,
                    time_start: vm.startTime,
                    time_end: vm.endTime,
                    title: vm.title,
                    description: vm.description,
                    room: vm.room.name
                },
                passes: vm.passes
            }

            vm.validate()

            if(!vm.errors.length) {
                vm.isSubmitting = true

                request
                    .post('https://challenges.1aim.com/roombooking/sendpass')
                    .send(JSON.stringify(data))
                    .end(function (res) {
                        if(res.body.success) {
                            vm.eventCreated = true
                        } else if(res.body.error) {
                            vm.errors.push(res.body.error.text)
                        }

                        vm.isSubmitting = false
                    })
            }
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
        },

        passes: function () {
            return this.$.attendees.list
        },

        startTime: function () {
            return moment(this.start).unix()
        },

        endTime: function () {
            return moment(this.end).unix()
        },

        date: function () {
            return moment(this.$root.selectedDate).unix()
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