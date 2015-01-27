var draggableMixin = require('../mixins/draggable-mixin')

module.exports = {

    mixins: [draggableMixin],

    data: function () {
        return {
            $draggableOptions: {group: 'members'},
            members: [{
                name: 'Messi',
                email: 'messi@agon.com',
                number: ''
            }]
        }
    },

    watch: {
        members: function (members) {
            this.$parent.$set('list', members)
        }
    },

    template: require('./selected-members.jade'),

    replace: true
}