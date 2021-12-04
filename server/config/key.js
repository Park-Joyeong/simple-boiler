console.log('hey: ' + process.NODE_ENV);
if (process.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}