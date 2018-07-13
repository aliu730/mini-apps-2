import { connect } from 'react-redux';
import changeData from '../actions/changeData';
import App from '../components/app';

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  changeData: data => dispatch(changeData(data)),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
