require.config({
  paths: {
    "jquery": "components/jquery/jquery",
    "underscore": "components/underscore-amd/underscore",
    "backbone": "components/backbone-amd/backbone"
  }
});

require(['scripts/views/app'], function(AppView){
  new AppView;
});