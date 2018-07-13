import React from 'react';
import Chart from './chart';
import axios from 'axios';

class App extends React.Component {

  grabData() {
    axios.get('/grabData')
      .then((response) => {
        console.log(response.data);
      });
  }

  componentDidMount() {
    this.grabData();
  }
  render() {
    // console.log(Chart);
    return (
      <div className="container-1">
        App Renders
        <Chart />
      </div>
    );
  }
}

export default App;
