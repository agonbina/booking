
/**
 * A mixin that initializes the selection dropdowns for 'hour' and 'minute'
 */

module.exports = {

    ready: function () {
        var $hour = $(this.$$.hour),
            $minute = $(this.$$.minute),
            vm = this

        this.$hour = $hour.dropdown({
            on: 'hover',
            onChange: function (value, text, $el) {
                vm.hour = value
            }
        })

        this.$minute = $minute.dropdown({
            on: 'hover',
            onChange: function (value, text, $el) {
                vm.minute = value
            }
        })
    },

    methods: {
        resetH: function () {
            this.$hour.dropdown('restore defaults')
            this.hour = ''
        },

        resetM: function () {
            this.$minute.dropdown('restore defaults')
            this.minute = ''
        }
    }

}