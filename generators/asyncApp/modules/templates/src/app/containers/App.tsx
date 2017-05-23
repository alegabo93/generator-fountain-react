import * as React from 'react';
import {IDispatch} from '~react-redux~redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

interface IAppProps {
  state?: any;
}

interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
  static propTypes = {
    state: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <p>Hola!! :D</p>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    state: state
  };
}

export default connect(
  mapStateToProps
)(App);
