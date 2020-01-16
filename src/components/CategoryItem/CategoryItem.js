import React from 'react';
import { useDispatch } from 'react-redux'
import * as S from './Styles';
import { fetchPostsByCategoryThunk, fetchPostsThunk } from '../../modules/post';


function CategoryItem({categoryName}) {
    const dispatch = useDispatch();

    return <S.CategoryItemWrapper onClick={() => {
        if(categoryName === '전체 보기')
            dispatch(fetchPostsThunk())
        else 
            dispatch(fetchPostsByCategoryThunk(categoryName))
    }}>{categoryName}</S.CategoryItemWrapper>
}

export default CategoryItem