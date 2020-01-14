import React from 'react';
import * as S from './AppStyle';
import { GlobalStyle } from './GlobalStyle';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <>
      <GlobalStyle />
      <S.AppWrapper>
        <S.SideBarWrapper><Categories/></S.SideBarWrapper>
        <S.ContentWrapper>2</S.ContentWrapper>
      </S.AppWrapper>
    </>
  );
}

export default App;
