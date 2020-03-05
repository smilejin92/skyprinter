import { connect } from 'react-redux';
import { switchPlaces, setPlace } from '../redux/modules/places';

import SearchBox from '../components/Main/SearchBox';

const mapStateToProps = state => {
  return {
    places: state.places,
  };
};

const mapDispatchToProps = dispatch => ({
  setPlace: places => {
    dispatch(setPlace(places));
  },
  switchPlaces: () => {
    dispatch(switchPlaces());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
