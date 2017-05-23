var React = require('react');
var connect = require('react-redux').connect;
var PropTypes = require('prop-types');

var App = React.createClass({
  propTypes: {
    state: PropTypes.object.isRequired
  },
  render: function () {
    return (
      <div>
        <p>Hola!! :D</p>
      </div>
    );
  }

});

function mapStateToProps(state) {
  return {
    state: state
  };
}

module.exports = connect(
  mapStateToProps
)(App);
