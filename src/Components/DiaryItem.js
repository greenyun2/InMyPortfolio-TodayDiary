import React from 'react'
import { useState, useRef } from 'react'
import styled from "styled-components";


const ContainerItem = styled.div`
  width: auto;
  padding: 10px;
  background-color: #B1C3D5;
  border-radius: 10px;
  margin-bottom: 18px;
  margin-right: 8px;
  margin-left: 8px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  .author-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    span {
      border-radius: 10px;
      padding: 5px;
      .author-name {
        background-color: #FFEB33; 
      }
      .author-emotion {
        background-color: #FFEB33;
      }
    }
  }
  .content {
    margin-bottom: 8px;
    line-height: 1.5;
    background-color: #FFEB33;
    border-radius: 10px;
    padding: 10px;
    
    textarea {
      width: 100%;
    }
    
  }
  .btn-wrap {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
      button {
        border: none;
        border-radius: 10px;
        background-color: #F2F2F2;
        color: #B4B4B4;
        padding: 5px;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        &:hover {
          background-color: #FFEB33;
          color: #222;
        }
      }
  }
`;

const DiaryItem = ({ author, content, emotion, created_date, id, onDelete, onEdit}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  // 수정하기 버튼을 클릭했는지 안했는지 판단
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  }

  // 삭제하기 버튼
  const handleClickRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제 하시겠습니까?`)) {
    onDelete(id)
    }
  } 

  // 수정하기 버튼 클릭시
  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  // 수정완료 버튼 클릭시
  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  }

  return (
    <ContainerItem>
          <div className='author-info'>
            <span className='date'>
              {new Date(created_date).toLocaleString()}
            </span>
            <span >
              이름 : <span className='author-name'>
                {author}
                </span>  | 
              감정점수 : <span className='author-emotion'>
                          {emotion}
                        </span> 
            </span>
          </div>
        <div className='content'>
          {isEdit ? (<textarea ref={localContentInput} value={localContent} onChange={(e) => setLocalContent(e.target.value)}/>) : (content)}
        </div>
        <div className='btn-wrap'>
            {isEdit ? (
              <>
              <button onClick={handleQuitEdit}>수정취소</button>
              <button onClick={handleEdit}>수정완료</button>
              </>
              ) : (
              <>
                <button onClick={handleClickRemove}>삭제하기</button>
                <button onClick={toggleIsEdit}>수정하기</button>
              </>
              )
              }
        </div>
    </ContainerItem>
  )
}


export default DiaryItem