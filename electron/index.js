var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', function() {
  var mainWindow = new BrowserWindow({
    center: true,
    width: 800,
    height: 600,
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
});
