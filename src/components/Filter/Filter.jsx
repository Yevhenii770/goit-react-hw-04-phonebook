import { PropTypes } from 'prop-types';
import { Input } from '../ContactForm/ContactForm.styled';
import { Label } from './Filter.styled';
const Filter = ({ value, onChange }) => (
  <Label>
    <span style={{ paddingBottom: '4px' }}>Find contacts by name</span>

    <Input type="text" value={value} onChange={onChange} />
  </Label>
);
export default Filter;

Filter.prototype = {
  value: PropTypes.string,
  onChengeFilter: PropTypes.func,
};
