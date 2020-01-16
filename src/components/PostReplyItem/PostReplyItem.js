import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteReplyThunk } from '../../modules/post';
import * as S from './Styles';

function PostReplyItem({ postId, replyId, email, description, date }) {
    const dispatch = useDispatch();

    const handleDelete = (postId, replyId) => {
        dispatch(deleteReplyThunk(postId, replyId))
    }

    return (
        <S.PostReplyItemWrapper>
            <S.PostReplyItemUpperWrapper>
                <S.PostReplyItemTtitleAndDate>{email}</S.PostReplyItemTtitleAndDate>
                <S.PostReplyItemTtitleAndDate>{date}</S.PostReplyItemTtitleAndDate>
            </S.PostReplyItemUpperWrapper>
            <S.PostReplyItemDescription>
                {description}
            </S.PostReplyItemDescription>
            <S.PostReplyItemDelete onClick={() => handleDelete(postId, replyId)}>삭제</S.PostReplyItemDelete>
        </S.PostReplyItemWrapper>
    )
}

export default PostReplyItem;