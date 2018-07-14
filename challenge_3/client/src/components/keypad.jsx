import React from 'react';

const KeyPad = () => {
  return (
    <div className="keyContainer">
      <div className="row-4">
        <button id="ten" type="button">10</button>
      </div>
      <div className="row-1">
        <button id="seven" type="button">7</button>
        <button id="eight" type="button">8</button>
        <button id="nine" type="button">9</button>
      </div>
      <div className="row-2">
        <button id="four" type="button">4</button>
        <button id="five" type="button">5</button>
        <button id="six" type="button">6</button>
      </div>
      <div className="row-3">
        <button id="one" type="button">1</button>
        <button id="two" type="button">2</button>
        <button id="three" type="button">3</button>
      </div>
      <div className="row-4">
        <button id="zero" type="button">0</button>
      </div>
    </div>
  );
};

export default KeyPad;
