console.log('NODE_ENV: ' + process.NODE_ENV);
console.log('PORT: ' + process.env.PORT);
if (process.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}