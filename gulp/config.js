var path = require('path');
var production = (process.env.NODE_ENV === 'production');

module.exports = {
	bower: 'web/bower_components',
	//dist: production ? 'dist' : '.tmp',
	dist: 'web',
	//livereloadPort: 35729,
	//port: 9000,
	//root: path.resolve('./')
};
