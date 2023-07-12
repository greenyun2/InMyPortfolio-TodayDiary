import React from 'react'
import DiaryItem from './DiaryItem'
import styled from "styled-components";

const ContainerList = styled.div`
  background-color: #BACEE0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .diary-items {
    width: 100%;
    height: 100%;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .list-title {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 40px;
      margin-bottom: 10px;
    }
    h4 {
      background-color: #B1C3D5;
      border-radius: 10px;
      padding: 10px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
      span {
        color: #FFEB33;
      }
    }
  }
`;



const DiaryList = ({ data , onDelete, onEdit }) => {
  return (
    <ContainerList>
      <div className='list-title'>
        <h2>Diary List</h2>
        <h4>
          <span>{data.length}</span>개의 일기가 있습니다.
          </h4>
      </div>
      <div className='diary-items'>
        {data.map((it) => (
          <DiaryItem key={it.id} {...it} onDelete={onDelete} onEdit={onEdit}/>
        ))}
      </div>
    </ContainerList>
  )
}

export default DiaryList;