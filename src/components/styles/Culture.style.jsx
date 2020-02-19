import styled from 'styled-components';
import { FlexWrapper } from '../styles';

export const ModalWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
  z-index: 1;
`;

export const Modal = styled.article`
  position: absolute;
  top: 27%;
  left: 50%;
  transform: translateX(-50%);
  width: 38.4rem;
  border-radius: 0.5rem;
  background: white;
  z-index: 2;
`;

export const ModalHeader = styled(FlexWrapper)`
  padding: 15px;
  border-bottom: 0.1rem solid #ccc;
`;

export const ModalTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.8rem;
`;

export const ExitButton = styled.button`
  font-size: 1.8rem;
  background: white;
  border: none;
`;

export const ModalBody = styled(FlexWrapper)`
  padding: 12px;
`;

export const Category = styled(FlexWrapper)`
  text-align: left;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CategoryLabel = styled.label.attrs(({ htmlFor }) => ({
  htmlFor,
}))`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  padding-bottom: 1rem;
`;

export const SvgIcon = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.3px;
  fill: #444560;
`;

export const Options = styled.select.attrs(({ id }) => ({ id }))`
  height: 3.6rem;
  padding-left: 0.8rem;
  font-size: 1.5rem;
  border-radius: 0.4rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
`;

export const CancelButton = styled.button`
  height: 3.6rem;
  padding: 0.6rem 1.8rem;
  font-size: 1.9rem;
  font-weight: 700;
  border-radius: 0.4rem;
  border: 0.2rem solid #dddde5;
  background: none;
  color: #0770e3;
`;

export const SaveButton = styled(CancelButton)`
  margin-bottom: 1.1rem;
  color: white;
  border: none;
  background: #00a698;
`;
