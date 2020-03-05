import { connect } from 'react-redux';
import Header from '../components/Header';
import {
  setCountries,
  setCurrencies,
  setCulture,
} from '../redux/modules/culture';
import { displayModal, hideModal } from '../redux/modules/display';

const mapStateToProps = state => ({
  culture: state.display.culture,
  country: state.culture.country,
  countryName: state.culture.countryName,
  currency: state.culture.currency,
  currencySymbol: state.culture.currencySymbol,
  countriesDOM: state.culture.countriesDOM,
  currenciesDOM: state.culture.currenciesDOM,
});

const mapDispatchToProps = dispatch => ({
  setCountries: () => {
    dispatch(setCountries());
  },
  setCurrencies: () => {
    dispatch(setCurrencies());
  },
  displayModal: () => {
    dispatch(displayModal('culture'));
  },
  hideModal: () => {
    dispatch(hideModal());
  },
  setCulture: (country, currency) => {
    dispatch(setCulture(country, currency));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
