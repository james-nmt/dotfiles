// Create Operations
var pushRight = slate.operation("push", {
  "direction" : "right",
  "style" : "bar-resize:screenSizeX/2"
});
var pushLeft = slate.operation("push", {
  "direction" : "left",
  "style" : "bar-resize:screenSizeX/2"
});
var pushTop = slate.operation("push", {
  "direction" : "top",
  "style" : "bar-resize:screenSizeY/2"
});
var fullscreen = slate.operation("move", {
  "x" : "screenOriginX",
  "y" : "screenOriginY",
  "width" : "screenSizeX",
  "height" : "screenSizeY"
});
// Bind A Crazy Function to 1+ctrl
slate.bind("1:ctrl", function(win) {
  // here win is a reference to the currently focused window
  //if (win.title() === "OMG I WANT TO BE FULLSCREEN") {
  //  win.doOperation(fullscreen);
  //  return;
  //}
  var appName = win.app().name();
  if (appName === "iTerm") {
    win.doOperation(pushRight);
  } else if (appName === "Safari" || appName === "Firefox") {
    win.doOperation(pushLeft);
  } else {
    win.doOperation(pushTop);
  }
});
//maximize
slate.bind('up:shift,cmd', function(win) {
    win.doOperation(fullscreen);
    return; 
});

//center
slate.bind('down:shift,cmd', function(win) {
    win.doOperation(slate.operation('move', {
        'x': 'screenOriginX + screenSizeX/4',
        'y': 'screenOriginY + screenSizeY/4',
        'width': 'screenSizeX/2',
        'height': 'screenSizeY/2',
    }));
});

slate.bind('left:shift,cmd', function(win){
				win.doOperation(slate.operation('throw',{
								'screen':'previous',
								'style':'resize'
				}));
});


slate.bind('right:shift,cmd', function(win){
				win.doOperation(slate.operation('throw',{
								'screen':'next',
								'style':'resize'
				}));
});