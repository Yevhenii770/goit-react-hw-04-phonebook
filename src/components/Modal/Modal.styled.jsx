import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.75);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition-duration: 10s;
  transition-property: all;
`;

export const ModalContent = styled.div`
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 30px 30px 30px;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
