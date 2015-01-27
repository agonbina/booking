var draggableMixin = require('../mixins/draggable-mixin')

module.exports = {

    mixins: [draggableMixin],

    data: function () {
        return {
            $draggableOptions: {group: 'members'}
        }
    },

    computed: {
        members: function () {
            return this.$root.members
        }
    },

    template: require('./organization-members.jade'),

    replace: true
}