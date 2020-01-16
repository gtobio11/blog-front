import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addReplyThunk } from '../../modules/post';
import * as S from './Styles';

function PostReplyInput({ postId }) {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [mail, setMail] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (postId, id, mail, description) => {
        const email = `${id}@${mail}`;
        dispatch(addReplyThunk(postId, email, description))
    }

    return (
        <S.PostReplyItemInputWrapper>
            <S.PostReplyItemInputTitle>
                댓글달기
            </S.PostReplyItemInputTitle>
            <p>
                이메일 : &nbsp;
                <input type="text" value={id} onChange={e => setId(e.target.value)}/>@  
                <input type="text" value={mail} onChange={e => setMail(e.target.value)}/>
            </p>
            <p>
                댓글 내용 : &nbsp;
                <S.PostReplyItemInputDescription type="text" value={description} onChange={e => setDescription(e.target.value)}/>
            </p>
            <S.PostReplyItemInputSubmit onClick={() => handleSubmit(postId, id, mail, description)}>완료</S.PostReplyItemInputSubmit>
        </S.PostReplyItemInputWrapper>
    )
}

export default PostReplyInput;