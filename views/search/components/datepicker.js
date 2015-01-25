
var moment = require('moment-timezone'),
    formatDate = function (date) {
        return date.tz('Europe/Berlin').format('MMMM DD[,] YYYY')
    }

module.exports = {

    data: function () {
        return {
            date: formatDate(moment())
        }
    },

    methods: {

        previous: function () {
            var yesterday = moment(this.date)
                .subtract(1, 'days')

            this.date = formatDate(yesterday)
        },

        next: function () {
            var tomorrow = moment(this.date)
                .add(1, 'days')

            this.date = formatDate(tomorrow)
        }

    },

    template: require('./datepicker.jade'),

    replace: true

}