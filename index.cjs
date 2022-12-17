const  {app} = require( 'electron');

console.log({
  ['app.getAppPath()']: app.getAppPath(),
  cwd: process.cwd(),
});
