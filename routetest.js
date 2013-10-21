if (Meteor.isClient) {
  Template.headTpl.welcome = function () {
    console.log('Rendering headTpl')
    return "Welcome to routetest.";
  };

  Template.headTpl.rendered = function () {
    console.log('Rendered headTpl')
  };

  Template.footTpl.rendered = function () {
    console.log('Rendered footTpl')
  };

  Template.baseLayout.empty = function () {
    console.log('Rendering baseLayout')
    return '';
  };

  Template.baseLayout.rendered = function () {
    console.log('Rendered baseLayout')
  };
  
}
