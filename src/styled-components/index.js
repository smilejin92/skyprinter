import styled, { css } from 'styled-components';

export const Header = styled.header`
  width: 1048px;
  margin: 0 auto;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'space-around'};
  align-items: ${props => props.align || 'center'};
  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
`;

export const Image = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  width: ${props => props.width || 200}px;
`;

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

export const FlexList = styled.ul`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'space-around'};
  align-items: ${props => props.align || 'center'};
  ${props => {
    let property = '';
    if (props.width) property += `width: ${props.width}px;`;
    if (props.height) property += `height: ${props.height}px;`;
    if (props.fontSize) property += `font-size: ${props.fontSize}rem;`;
    return css`
      ${property}
    `;
  }}
`;

export const SubMenuButton = styled.button`
  border: 2px solid #dddde5;
  border-radius: 0.5rem;
  background: none;
  padding: 9px 18px;
  width: ${props => props.width || 100}px;

  &:hover {
    border: 2px solid #0770e3;
  }
`;

export const LoginButton = styled(SubMenuButton)`
  color: #0770e3;
  font-weight: 700;
  font-size: 1.8rem;
`;

export const MainMenuButton = styled.button.attrs(
  props => props.disabled && { disabled: true },
)`
  background: #0770e3;
  border: none;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 0.3rem 0.3rem 0 0;
  color: white;
  padding: 8px 12px;

  ${props =>
    props.active &&
    css`
      background: #042759;
    `}

  &:hover {
    background: #042759;
  }
`;

export const BgWrapper = styled(FlexWrapper)`
  background: 50% 60% / cover no-repeat
    url('https://content.skyscnr.com/m/785bdfcbe683606c/Large-Flights-hero-2.jpg?crop=1800px:1375px&quality=76');
`;

export const FlexSection = styled.section`
  width: 1096px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'space-around'};
  align-items: ${props => props.align || 'center'};
  ${props => {
    let property = '';
    if (props.height) property += `height: ${props.height}px;`;
    if (props.minHeight) property += `min-height: ${props.minHeight}rem;`;
    return css`
      ${property}
    `;
  }}
`;

export const SearchArea = styled(FlexSection)`
  padding: 65px 0 95px 0;
`;

export const Title = styled.h3``;
