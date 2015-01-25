
module.exports = {


    components: {
        'organization-members': require('./components/organization-members'),
        'selected-members': require('./components/selected-members')
    },

    template: require('./template.jade'),

    replace: true
}