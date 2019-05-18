/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

$('#particles-js').click(function() { 
    console.log('foooooo')
    debugger; 
})