import React from 'react';
import styled from 'styled-components';

const SearchFormWrapper = styled.div`
  height: 22.2rem;
  background: #02122c;
  border-radius: 0.3rem;
`;

function SearchForm() {
  return <SearchFormWrapper>검색 영역</SearchFormWrapper>;
}

export default SearchForm;
