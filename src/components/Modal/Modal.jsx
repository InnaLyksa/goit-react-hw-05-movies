import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalImg } from './Modal.styled';

export function Modal({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    switchScrollBody('hidden');

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      switchScrollBody('scroll');
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const switchScrollBody = state => {
    Object.assign(document.body.style, {
      overflowY: state,
    });
  };
  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalImg src={image} alt="Enlarged search result" />
    </ModalBackdrop>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};
