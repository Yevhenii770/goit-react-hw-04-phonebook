import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';
import { PropTypes } from 'prop-types';

const moodalRoot = document.querySelector('#moodal-root');
const Modal = props => {
  return createPortal(
    <ModalBackdrop>
      <ModalContent>{props.children}</ModalContent>
    </ModalBackdrop>,
    moodalRoot
  );
};

export default Modal;

Modal.prototype = {
  props: PropTypes.object,
};
