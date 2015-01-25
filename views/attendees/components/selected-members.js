
var draggableMixin = require('../../../helpers').draggableMixin

module.exports = {

    mixins: [ draggableMixin ],

    data: function () {
        return {
            $draggableOptions: { group: 'members' }
        }
    },

    template:
        '<div class="ui large relaxed horizontal selection list">' +
            '<div class="item">One</div>' +
        '</div>',

    replace: true
}