
var draggableMixin = require('../mixins/draggable-mixin')

module.exports = {

    mixins: [ draggableMixin ],

    data: function () {
        return {
            $draggableOptions: { group: 'members' },
            members: [{
                name: 'Agon',
                email: 'agon_bina@hotmail.com',
                phone: ''
            }, {
                name: 'Yann',
                email: 'work@1aim.com',
                phone: ''
            }]
        }
    },

    template: require('./organization-members.jade'),

    replace: true
}