Meteor.startup(function() {
  // must disconnect! see README.md ##Why disconnect? section
  // while developing, you can comment this for the live reload!
  Meteor.disconnect();
  // you can delete and write your code from this part
  React.render(<App />, document.getElementById('react-render-target'));
});
