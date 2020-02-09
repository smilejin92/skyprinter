import styled, { css } from 'styled-components';

// COMMON USE
export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'initial'};
  align-items: ${props => props.align || 'initial'};
  ${props => {
    let property = '';
    if (props.width) property += `width: ${props.width}px;`;
    if (props.height) property += `height: ${props.height}px;`;
    return css`
      ${property}
    `;
  }}
`;

export const FlexSection = styled.section`
  width: 1096px;
  margin: 0 auto;
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'initial'};
  align-items: ${props => props.align || 'initial'};
  ${props => {
    let property = '';
    if (props.height) property += `height: ${props.height}px;`;
    if (props.minHeight) property += `min-height: ${props.minHeight}rem;`;
    return css`
      ${property}
    `;
  }}
`;

export const FlexList = styled.ul`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'initial'};
  align-items: ${props => props.align || 'initial'};
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

export const FlexLabel = styled.label.attrs(({ htmlFor }) => ({
  for: htmlFor,
}))`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'initial'};
  align-items: ${props => props.align || 'initial'};
  font-size: 1.2rem;
  font-weight: 700;
  padding-bottom: 10px;
  svg {
    width: 24px;
    height: 24px;
    margin-right: 3px;
    fill: #444560;
  }
`;

export const Image = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  width: ${props => props.width || 200}px;
`;

export const Description = styled.p`
  font-size: ${props => props.fontSize}rem;
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

// HEADER
export const Header = styled.header`
  width: 1048px;
  margin: 0 auto;
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

// CULTURE SETTING POPUP
export const CultureWrapper = styled(FlexWrapper)`
  padding: 12px;
`;

export const CultureHeader = styled(FlexWrapper)`
  padding: 15px;
  border-bottom: 1px solid #ccc;
`;

export const CultureTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.8rem;
`;

export const ExitButton = styled.button`
  font-size: 1.8rem;
  background: white;
  border: none;
`;

export const CultureItem = styled(FlexWrapper)`
  text-align: left;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CultureSelect = styled.select.attrs(({ id }) => ({ id }))`
  height: 36px;
  padding-left: 8px;
  font-size: 1.5rem;
  border-radius: 0.4rem;
`;

export const CultureButton = styled.button`
  height: 36px;
  padding: 6px 18px;
  font-size: 1.9rem;
  font-weight: 700;
  border-radius: 0.4rem;
  border: 2px solid #dddde5;
  background: none;
  color: #0770e3;

  &:first-child {
    margin-bottom: 11px;
    color: white;
    border: none;
    background: #00a698;
  }
`;

// SEARCH AREA
export const BgWrapper = styled(FlexWrapper)`
  background: 50% 60% / cover no-repeat
    url('https://content.skyscnr.com/m/785bdfcbe683606c/Large-Flights-hero-2.jpg?crop=1800px:1375px&quality=76');
`;

export const SearchArea = styled(FlexSection)`
  padding: 65px 0 95px 0;
`;

export const SearchAreaTitle = styled.h3`
  font-size: 6rem;
  font-weight: 600;
  line-height: 6rem;
  color: white;
  padding-left: 24px;
`;

export const TravelInfo = styled.div`
  height: 222px;
  background: #02122c;
  border-radius: 0.3rem;
`;
