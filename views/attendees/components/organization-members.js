
var draggableMixin = require('../../../helpers').draggableMixin

module.exports = {

    mixins: [ draggableMixin ],

    data: function () {
        return {
            members: ["Agon", "Jann"]
        }
    },

    template:
        '<ul>' +
            '<li v-repeat="members">{{$value}}</li>' +
        '</ul>',

    replace: true
}