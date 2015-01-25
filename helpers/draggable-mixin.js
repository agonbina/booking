
var Sortable = require('sortablejs'),
    assign = require('101/assign')

module.exports = {

    beforeCompile: function () {
        var $el = this.$el,
            options = this.$data.$draggableOptions || {}

        assign(options, {
            sort: false,
            animation: 250
        })

        this.$sortable = Sortable.create($el, options)
    },


    beforeDestroy: function () {
        this.$sortable.destroy()
    }

}