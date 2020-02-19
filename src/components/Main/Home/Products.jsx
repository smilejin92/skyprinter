import React from 'react';
import Recommended from './Recommended';
import TripIdea from './TripIdea';
import ProductsOfMonth from './ProductsOfMonth';
import styled from 'styled-components';
import { HiddenHeader } from '../../styles';

const ProductsWrapper = styled.div`
  svg {
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
`;

const Products = () => (
  <ProductsWrapper>
    <HiddenHeader>상품 영역</HiddenHeader>
    <Recommended />
    <TripIdea />
    <ProductsOfMonth />
  </ProductsWrapper>
);

export default Products;
