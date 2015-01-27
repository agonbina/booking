
module.exports = {

    data: function () {
        return {
            list: [],
            isAddingMember: true
        }
    },

    components: {
        'ui-organization-members': require('./components/organization-members'),
        'ui-selected-members': require('./components/selected-members'),
        'ui-add-member': require('./components/add-member')
    },

    template: require('./template.jade'),

    replace: true
}