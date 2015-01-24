
var Sortable = require('sortablejs')

module.exports = {

    beforeCompile: function () {
        var $el = this.$el,
            options = this.$get('draggable') || {}

        Sortable.create($el, options)
    }

}