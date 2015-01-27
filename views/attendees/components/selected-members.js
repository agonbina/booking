var draggableMixin = require('../mixins/draggable-mixin')

module.exports = {

    mixins: [draggableMixin],

    data: function () {
        return {
            $draggableOptions: { group: 'members' },
            members: [{
                name: 'Agon Bina',
                email: 'gonigkum@gmail.com.com',
                number: '38971967828'
            }]
        }
    },

    compiled: function () {
        this.$parent.$set('list', this.members)
    },

    watch: {
        members: function (members) {
            this.$parent.$set('list', members)
        }
    },

    template: require('./selected-members.jade'),

    replace: true
}