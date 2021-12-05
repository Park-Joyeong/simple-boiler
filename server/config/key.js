console.log('NODE_ENV: ' + process.env.NODE_ENV);
console.log('PORT: ' + process.env.PORT);
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}