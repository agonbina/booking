
var path = require('path')

module.exports = {
    entry: "./app.js",
    output: {
		path: path.join(__dirname, 'build'),
        filename: "build.js"
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.jade/, loader: 'html!jade-html' },
            { test: /\.json/, loader: 'json' }
        ]
    }
};
