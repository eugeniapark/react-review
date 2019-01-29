import React from 'react';

// var App = () => <div>Hello from Component!</div>;
class App extends React.Component {
  render() {
    return <div>
      {this.props.first} {this.props.last}
    </div>
  }
}


export default App;