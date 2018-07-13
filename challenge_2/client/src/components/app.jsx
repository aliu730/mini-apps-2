import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class App extends React.Component {
  componentDidMount() {
    const { changeData } = this.props;
    changeData();
  }

  render() {
    const { data } = this.props;
    if (data.length !== 0) {
      const { bpi } = data;
      const dates = Object.keys(bpi);
      const dataNums = [];
      for (let i = 0; i < dates.length; i += 1) {
        dataNums.push(bpi[dates[i]]);
      }
      return (
        <div className="container-1">
          Rendering..
          <Bar
            data={{
              labels: dates,
              datasets: [{ data: dataNums }],
            }}
          />
          <span>
            Powered by CoinDesk
          </span>
        </div>
      );
    }
    return (
      <div>
        Rendering
      </div>
    );
  }
}

export default App;
