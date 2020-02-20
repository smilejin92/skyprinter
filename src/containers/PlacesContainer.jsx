import { connect } from 'react-redux';
import { setPlace, switchPlaces } from '../redux/modules/places';
import { setError } from '../redux/modules/error';
import SearchBox from '../components/Main/SearchBox';

const mapStateToProps = state => {
  return {
    places: state.places,
    errors: state.error.errors,
    errorOccurred: state.error.errorOccurred,
  };
};

const mapDispatchToProps = dispatch => ({
  setPlace: places => {
    dispatch(setPlace(places));
  },
  switchPlaces: () => {
    dispatch(switchPlaces());
  },
  setError: errors => {
    dispatch(setError(errors));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
