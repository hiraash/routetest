Router.configure({
  autoRender: false
});

Router.map(function() {

  this.route ('home', {
    path: '/',
    
    before: function() {
      this.redirect('olympus');
    }
  });
  
  //Root of the app
  this.route('olympus', {
    path: '/olympus',
    layoutTemplate: 'baseLayout',
    template: 'olympus',
    yieldTemplates: {
          'headTpl': {to: 'secTop'},
          'olympusDesc': {to: 'desc'},
          'footTpl': {to: 'secBottom'}
        }

  });

  this.route('gatsby', {
    path: '/gatsby',
    layoutTemplate: 'baseLayout',
    template: 'gatsby',
    yieldTemplates: {
          'headTpl': {to: 'secTop'},
          'gatsbyDesc': {to: 'desc'},
          'footTpl': {to: 'secBottom'}
        }

  });
  

});