import React from 'react';
import * as S from './Styles';

function CategoryItem({categoryName}) {
    return <S.CategoryItemWrapper>{categoryName}</S.CategoryItemWrapper>
}

export default CategoryItem