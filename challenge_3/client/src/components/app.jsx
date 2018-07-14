import React from 'react';
import KeyPad from './keypad.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        Bowling Score Player 1
        <div className="container-Header">
          <div className="box-1h">
            1
          </div>
          <div className="box-2h">
            2
          </div>
          <div className="box-3h">
            3
          </div>
          <div className="box-4h">
            4
          </div>
          <div className="box-5h">
            5
          </div>
          <div className="box-6h">
            6
          </div>
          <div className="box-7h">
            7
          </div>
          <div className="box-8h">
            8
          </div>
          <div className="box-9h">
            9
          </div>
          <div className="box-10h">
            10
          </div>
          <div className="hdcpScoreh">
            Hdcp Score
          </div>
          <div className="MaxPossibleh">
            Max Possible Score
          </div>
        </div>
        <div className="container-1">
          <div className="box-1">
            <div className="score-1box1">
            </div>
            <div className="score-1box2">
            </div>
          </div>
          <div className="box-2">
            <div className="score-2box1">
            </div>
            <div className="score-2box2">
            </div>
          </div>
          <div className="box-3">
            <div className="score-3box1">
            </div>
            <div className="score-3box2">
            </div>
          </div>
          <div className="box-4">
            <div className="score-4box1">
            </div>
            <div className="score-4box2">
            </div>
          </div>
          <div className="box-5">
            <div className="score-5box1">
            </div>
            <div className="score-5box2">
            </div>
          </div>
          <div className="box-6">
            <div className="score-6box1">
            </div>
            <div className="score-6box2">
            </div>
          </div>
          <div className="box-7">
            <div className="score-7box1">
            </div>
            <div className="score-7box2">
            </div>
          </div>
          <div className="box-8">
            <div className="score-8box1">
            </div>
            <div className="score-8box2">
            </div>
          </div>
          <div className="box-9">
            <div className="score-9box1">
            </div>
            <div className="score-9box2">
            </div>
          </div>
          <div className="box-10">
            <div className="score-10box1">
            </div>
            <div className="score-10box2">
            </div>
            <div className="score-10box3">
            </div>
          </div>
          <div className="hdcpScore">
          </div>
          <div className="MaxPossible">
          </div>
        </div>
        <KeyPad />
      </div>
    );
  }
}

export default App;
