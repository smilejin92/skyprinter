import InfantChild from './InfantChild';
import { connect } from 'react-redux';
import { setChildAge } from '../../../redux/modules/passenger';

const mapDispatchToProps = dispatch => ({
  setAge: (id, age) => {
    dispatch(setChildAge(id, age));
  },
});
export default connect(null, mapDispatchToProps)(InfantChild);
