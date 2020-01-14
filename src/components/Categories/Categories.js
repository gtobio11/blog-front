import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './Styles';
import CategoryItem from '../CategoryItem/CategoryItem';

function Categories() {
    const [categoryItems, setCategoryItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/getCategories').then(res => {
            if(res.status === 200)
                setCategoryItems(res.data)
        })
    }, [])

    const categories = categoryItems.map(category => <CategoryItem categoryName={category} key={`category-${category}`}/>)

    return <S.CategoriesWrapper>{categories}</S.CategoriesWrapper>
}

export default Categories;