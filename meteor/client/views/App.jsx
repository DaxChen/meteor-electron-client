// App component - represents the whole app
App = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
    };
  },
  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
    };
  },
  render() {
    return (
      <div className='container'>
        <header>
          <h1> Welcome to meteor-electron-client! </h1>
        </header>
        <h2> Packages </h2>
        <p>
          I included some packages I often use, such as react, stylus,
           bootstrap.
        </p>
        <p>
          To list meteor packages, you can type <strong><i>meteor list</i>
          </strong> inside the <i>meteor/</i> subdirectory. And remove packages
           you don't use!
        </p>
        <h2> Great Thanks To <a href=
          "https://github.com/frozeman/meteor-build-client">
          <i>meteor-build-client</i></a>
        </h2>
        <p>
          All this is posible is because of this awesome package called <a href=
          "https://github.com/frozeman/meteor-build-client">Meteor Build Client
          </a>.
        </p>
        <p>
          Check out <a href="https://youtu.be/Xgb9NTxPqVY">this video!
          </a> After I saw this, I knew this is probably the last time I'll need
           to write a gulpfile, lol.
        </p>
        <h2> Alternatives </h2>
        <p> This project is to let you build an <strong>
          OFFLINE</strong> electron app, if you want your app to be able to
          connect to a server, definitely check
           out <a href="https://github.com/jrudio/meteor-electron">
          jrudio/meteor-electron
          </a> and <a href="https://github.com/sircharleswatson/Electrometeor">
          sircharleswatson/Electrometeor</a>, or do it youself with <a href=
          "https://medium.com/@guidouil/cross-platform-desktop-apps-
          with-meteor-and-electron-5355eb9e351">this tutorial</a>. Or, you can
          delete <i>Meteor.disconnect()</i>, and modify the <i>
          "meteor-build-client"</i> part in the gulpfile, to add an
           additional <i>--server [YOUR_DOMAIN]</i> parameter.
        </p>
      </div>
    );
  },
});
