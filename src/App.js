import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as S from './AppStyle';
import { GlobalStyle } from './GlobalStyle';
import Categories from './components/Categories/Categories';
import Post from './components/Post/Post';
import { fetchPostsThunk } from './modules/post';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts);

  useEffect(() => {
    dispatch(fetchPostsThunk())
  }, [dispatch])

  const PostItems = posts.map(postData => <Post {...postData} key={postData.postId}/>)

  return (
    <>
      <GlobalStyle />
      <S.AppWrapper>
        <S.SideBarWrapper><Categories/></S.SideBarWrapper>
        <S.ContentWrapper>{PostItems}</S.ContentWrapper>
      </S.AppWrapper>
    </>
  );
}

export default App;
