
var draggableMixin = require('../../../helpers').draggableMixin

module.exports = {

    mixins: [ draggableMixin ],

    data: function () {
        return {
            $draggableOptions: { group: 'members' },
            members: ["Agon", "Jann", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven"]
        }
    },

    template:
        '<div class="ui large horizontal selection list">' +
            '<div v-repeat="members" class="item">' +
                '<img class="ui avatar image" src="https://pbs.twimg.com/profile_images/3340765613/a2786703b889aae5910044a043879fbc_bigger.jpeg">' +
                '<div class="content">' +
                    '<div class="header">{{$value}}</div>' +
                '</div>' +
            '</div>' +
        '</div>',

    replace: true
}