const less = require('less');

module.exports = function (source) {
    let callback = this.async();
    less.render(source, function (err, obj) {
        callback(err, obj.css);
    });
};