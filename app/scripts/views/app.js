define(['backbone'], function(Backbone) {
  var App = Backbone.View.extend({
    initialize: function() {
      console.log('I can hear you');
    }
  });

  return App;
});