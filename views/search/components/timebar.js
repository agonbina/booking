
module.exports = {

    created: function () {
        var availability = this.$parent.avail

        this.availability = availability.map(function(range) {
            var fromTo = range.split('-').map(function(time) {
                return time.trim()
            })

            return [ fromTo[0], fromTo[1] ]
        })
    },

    data: function () {
        return {
            availability: []
        }
    },

    computed: {
        width: function () {
            return (100 / this.availability.length)
        }
    },

    template: require('./timebar.jade'),

    replace: true
}