import styled from 'styled-components';

export const PostWrapper = styled.div`
    display: inline-block;
    margin: 2rem 0;
    padding: 1rem;
    border: 1px solid black;
    box-sizing: border-box;
    width: 75%;
`

export const PostTitle = styled.p`
    font-size: 1.2rem;
`

export const PostDateAndCategoryWrapper = styled.p`
    display: flex;
    justify-content: space-between;
`

export const PostDateAndCategory = styled.span`
    font-size: 0.8rem;
`

export const PostReplyWrapper = styled.div`
    margin-top: 1rem;
    paddin-top: 1rem;
    border-top: 1px solid black;
`