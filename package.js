Package.describe({
  summary: "Wysihtml5 text editor with bootstrap styling"
});

Package.on_use(function (api){

  //wysihtml5
  api.add_files('lib/css/wysiwyg-color.css', 'client');
  api.add_files('lib/js/wysihtml5-0.3.0.js', 'client');
  api.add_files('dist/bootstrap-wysihtml5-0.0.2.css', 'client');
  api.add_files('dist/bootstrap-wysihtml5-0.0.2.js', 'client');
  
  //override image paths
  // api.add_files('path-override.css', 'client'); 
});
