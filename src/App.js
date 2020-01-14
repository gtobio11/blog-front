import React from 'react';
import * as S from './AppStyle';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <S.AppWrapper>
        <S.SideBarWrapper>1</S.SideBarWrapper>
        <S.ContentWrapper>2</S.ContentWrapper>
      </S.AppWrapper>
    </>
  );
}

export default App;
