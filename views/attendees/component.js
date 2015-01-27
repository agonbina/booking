
module.exports = {

    data: function () {
        return {
            list: []
        }
    },

    components: {
        'ui-organization-members': require('./components/organization-members'),
        'ui-selected-members': require('./components/selected-members')
    },

    template: require('./template.jade'),

    replace: true
}