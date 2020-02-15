import React from 'react';
import styled, { css } from 'styled-components';
import { HiddenHeader, FlexList, FlexWrapper } from '../../styles';

const SearchMenu = styled(FlexList)`
  width: 26.6rem;
  height: 3.6rem;
`;

const SearchMenuBtn = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 0.3rem 0.3rem 0 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  background: #0770e3;

  ${props =>
    props.active &&
    css`
      background: #042759;
    `}

  &:hover {
    background: #042759;
  }
`;

const SvgIcon = styled.svg`
  width: 20px;
  margin-right: 6px;
  fill: white;
`;

const MainNav = () => (
  <nav>
    <HiddenHeader>검색 메뉴</HiddenHeader>
    <SearchMenu justify="space-between" align="center">
      <li>
        <SearchMenuBtn active>
          <FlexWrapper justify="space-around" align="center">
            <SvgIcon viewBox="0 0 24 24">
              <path d="M3.455 8.78a.775.775 0 0 1 .952.224l1.472 1.91 1.816-.267a2.852 2.852 0 0 1 .536-.051h9.862a5.099 5.099 0 0 1 2.438.62.944.944 0 0 1-.072 1.67l-.046.021a5.1 5.1 0 0 1-2.194.497h-4.314l-3.663 5.867A1.546 1.546 0 0 1 8.93 20H7.78l2.007-5.858v-.738h-1.53a2.865 2.865 0 0 1-.589-.062l-1.765-.288-1.509 1.958a.775.775 0 0 1-.929.237.786.786 0 0 1-.419-.984L3.862 12 3.06 9.749a.785.785 0 0 1 .395-.97zM8.929 4a1.545 1.545 0 0 1 1.312.729l3.19 4.985H9.749L7.778 4z" />
            </SvgIcon>
            <span>항공권</span>
          </FlexWrapper>
        </SearchMenuBtn>
      </li>
      <li>
        <SearchMenuBtn disabled>
          <FlexWrapper justify="space-around" align="center">
            <SvgIcon viewBox="0 0 24 24">
              <path d="M3.827 6.65c.428 0 .81.15.855.342l.005.04v3.196a2.356 2.356 0 0 0 2.16 2.438l.11.004 13.878.02c.371 0 0 4.59 0 4.971a.67.67 0 0 1-1.32.184l-.014-.07-.32-1.948H4.687l-.352 1.949a.67.67 0 0 1-1.331-.045L3 17.661V7.031c0-.21.37-.381.827-.381zm14.674 2.228a1.887 1.887 0 0 1 1.936 1.834v.087a.891.891 0 0 1-.914.865h-8.859a.891.891 0 0 1-.914-.865v-.087a1.887 1.887 0 0 1 1.936-1.834zM7.5 7.764a1.672 1.672 0 1 1 0 3.343 1.672 1.672 0 1 1 0-3.343z" />
            </SvgIcon>
            <span>호텔</span>
          </FlexWrapper>
        </SearchMenuBtn>
      </li>
      <li>
        <SearchMenuBtn disabled>
          <FlexWrapper justify="space-around" align="center">
            <SvgIcon viewBox="0 0 24 24">
              <path d="M6 14a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 6 14zm12 0a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 18 14zM9.854 7.5a8.552 8.552 0 0 1 2.872.45 15.534 15.534 0 0 1 3.602 2.466 13.077 13.077 0 0 1 4.842 1.1c.54.28.691 1.294.816 2.14.14.946-.812 1.406-1.466 1.638l-.037.017A2.5 2.5 0 1 0 15.54 16H8.45a2.5 2.5 0 1 0-4.95-.5q0 .09.006.183c-.161-.043-.249-.076-.293-.09a1.815 1.815 0 0 1-1.185-2.101v-.003l.503-2.868h10.923c.601 0 .842-.595.271-.981a5.71 5.71 0 0 0-1.326-.72 7.612 7.612 0 0 0-2.546-.394 13.162 13.162 0 0 0-2.681.3c-1.157.243-2.692.69-3.658 1.002a.457.457 0 0 1-.552-.24l-.022-.054-.004-.01a.478.478 0 0 1 .277-.608 27.517 27.517 0 0 1 3.76-1.095 14.094 14.094 0 0 1 2.88-.32z" />
            </SvgIcon>
            <span>렌터카</span>
          </FlexWrapper>
        </SearchMenuBtn>
      </li>
    </SearchMenu>
  </nav>
);

export default MainNav;
