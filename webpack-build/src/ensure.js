require.ensure(['./ensure-a'], function(require) {
  var content = require('./ensure-a');
  console.log(content)
},'ensureA');
