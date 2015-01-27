
var Sortable = require('sortablejs'),
    assign = require('101/assign')

module.exports = {

    beforeCompile: function () {
        var $el = this.$el,
            vm = this,
            options = this.$data.$draggableOptions || {}

        assign(options, {
            sort: false,
            animation: 250,
            draggable: '.item',
            onAdd: function (e) {
                var data = e.item.__vue__.$data

                vm.members.splice(e.newIndex, 0, data)
            },
            onRemove: function (e) {
                var index = e.oldIndex

                vm.members.splice(index, 1)
            }
        })

        this.$sortable = Sortable.create($el, options)
    },


    beforeDestroy: function () {
        this.$sortable.destroy()
    }

}