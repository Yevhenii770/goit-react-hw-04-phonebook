import { PropTypes } from 'prop-types';
import { Input } from '../ContactForm/ContactForm.styled';
import { Label } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="text" value={value} onChange={onChange} />
  </Label>
);
export default Filter;

Filter.prototype = {
  value: PropTypes.string,
  onChengeFilter: PropTypes.func,
};
