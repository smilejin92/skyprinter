import styled from 'styled-components';

export const HiddenHeader = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  opacity: 0;
`;

export const FlexSection = styled.section`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'initial'};
  align-items: ${({ align }) => align || 'initial'};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'initial')};
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'initial'};
  align-items: ${({ align }) => align || 'initial'};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'initial')};
`;

export const FlexList = styled.ul`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'initial'};
  align-items: ${({ align }) => align || 'initial'};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'initial')};
`;

export const Image = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))``;

export const Flag = styled(Image)`
  width: 16px;
  margin: 0 3px 0 6px;
  border: 1px solid #dddde5;
`;
