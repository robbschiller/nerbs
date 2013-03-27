require.config({
  'paths': {
    "underscore": "components/underscore",
    "backbone": "components/backbone"
  }
});

require([
  'order!libs/underscore',
  'order!libs/backbone',
  'order!app'
  ],
  function(_,Backbone,app){
    app.init();
});