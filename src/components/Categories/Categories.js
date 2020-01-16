import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as S from './Styles';
import CategoryItem from '../CategoryItem/CategoryItem';
import { fetchCategoriesThunk } from '../../modules/category';

function Categories() {
    const dispatch = useDispatch()
    const categories = useSelector(
        state => state.category.categories
    )

    useEffect(() => {
        dispatch(fetchCategoriesThunk());
    }, [dispatch])

    const categoryItems = categories.map(category => <CategoryItem categoryName={category} key={`category-${category}`}/>)

    return (
        <S.CategoriesWrapper>
            <S.CategoryTitle>
                카테고리
            </S.CategoryTitle>
            <CategoryItem categoryName={'전체 보기'} />
            { categoryItems }
        </S.CategoriesWrapper>
    )
}

export default Categories;