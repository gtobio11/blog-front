import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as S from './Styles';
import { fetchPostsByCategoryThunk } from '../../modules/post';


function CategoryItem({categoryName}) {
    const dispatch = useDispatch();
    const posts = useSelector(
        state => state.post.posts
    )

    useEffect(() => {
        console.log(posts);
    }, [posts])
    return <S.CategoryItemWrapper onClick={() => dispatch(fetchPostsByCategoryThunk(categoryName))}>{categoryName}</S.CategoryItemWrapper>
}

export default CategoryItem