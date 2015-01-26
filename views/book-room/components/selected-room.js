
module.exports = {

    computed: {
        room: function () {
            return this.$root.selectedRoom
        }
    },

    template: require('./selected-room.jade'),

    replace: true
}