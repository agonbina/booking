
module.exports = {

    computed: {
        room: function () {
            return this.$root.selectedRoom
        },
        avail: function () {
            return this.room.avail
        }
    },

    components: {
        'ui-timebar': require('../../search/components/timebar')
    },

    template: require('./selected-room.jade'),

    replace: true
}