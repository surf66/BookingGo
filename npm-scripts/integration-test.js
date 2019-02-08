var shell = require('shelljs');
var kill  = require('tree-kill');

let app   = shell.exec('npm start', { async: true, silent: true });
let tests = shell.exec('cypress run');

kill(app.pid); // kill the app when we are finished
 
process.exitCode = tests.code; // this is to make node exit with non zero code if tests fails