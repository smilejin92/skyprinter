import styled from 'styled-components';
import { FlexWrapper } from '.';

export const BgFooter = styled.footer`
  color: white;
  padding: 3rem 0;
  background-color: #02122c;
  font-size: 1.6rem;
  border: none;
  min-width: 1096px;
  svg {
    fill: #fff;
    width: 1.8rem;
    height: 1.8rem;
    pointer-events: none;
  }
`;

export const FooterWrapper = styled(FlexWrapper)`
  width: 1048px;
  height: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  line-height: 1.5;
  justify-content: space-around;

  a:visited {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: white;
    text-decoration: underline;
  }
`;

export const FooterItem = styled.div`
  width: calc((100% - 10.8rem) / 4);
  padding: 3rem 0;
`;

export const FooterItemHeader = styled.h3`
  color: #ff7b59;
  font-size: 2.8rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 1.2rem;
  line-height: 3rem;
`;

export const FooterAddButton = styled.button`
  border: none;
  background: inherit;
  padding: 0;
  margin: 0;
  outline: none;

  i {
    cursor: pointer;
  }
`;

export const FooterAddSpan = styled.span`
  line-height: 1.8rem;
  display: inline-block;
  margin-top: 0.3rem;
  vertical-align: top;
`;

export const FooterSubMenu = styled.ul`
  li {
    margin-left: 1.2rem;
  }
`;
