
var makeHMmixin = require('../mixins/makeHMmixin')

module.exports = {

    compiled: function () {
        var vm = this

        vm.$parent.$watch('start', function (start) {
            var hour = start.hour,
                minute = start.minute

            console.log(start)

            if(!hour || !minute) {
                vm.isDisabled = true
            } else {
                vm.isDisabled = false
            }
        }, true)
    },

    mixins: [ makeHMmixin ],

    data: function () {
        return {
            isDisabled: true,
            hour: '',
            minute: ''
        }
    },

    watch: {
        isDisabled: function (isDisabled) {
            if(isDisabled) {
                this.$hour.dropdown('restore defaults')
                this.$minute.dropdown('restore defaults')
            }
        }
    },

    template: require('./end-time.jade'),

    replace: true

}