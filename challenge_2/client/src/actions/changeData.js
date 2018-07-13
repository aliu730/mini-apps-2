import dataGrabber from '../dataGrabber';
import newData from './newData';

const changeData = () => {
  return (dispatch) => {
    dataGrabber((data) => {
      dispatch(newData(data));
    });
  };
};

export default changeData;
