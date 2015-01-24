
exports.install = function(Vue) {
    var definition = require('./component.js')

    Vue.component('ui-search', definition)
}