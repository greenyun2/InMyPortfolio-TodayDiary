import React from 'react'
import { useState, useRef } from 'react';
import styled from "styled-components";

const ContainerEditor = styled.div`
width: 400px;
height: 600px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex: wrap;
gap: 50px;
padding: 10px 0;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

.mobile-mockup {
  border: 1px solid #999;
  width: 400px;
  height: 828px;
  position: relative;
  background-color: #eee;
  border-radius: 60px;
  box-shadow: inset 0 06px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .camera {
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #222;
    z-index: 100;
    width: 18px; height: 18px;
  
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      background-color: rgb(71, 71, 71);
      width: 10px;
      height: 10px;
      border-radius: inherit;
    }
  }

  .volume {
    width: 4px;
    height: 200px;
    position: absolute;
    right: 100%;
    top: 120px;
  }
  .volume span {
    position: absolute;
    width: 100%;
    height: 55px;
    background-color: #222;
  }
  .volume span:nth-child(1) {
    top: 0;
    height: 40px;
  }
  .volume span:nth-child(2) {
    bottom: 70px;
  }
  .volume span:nth-child(3) {
    bottom: 0;
  }
  .power {
    width: 4px;
    position: absolute;
    left: 100%;
    top: 200px;
    height: 100px;
  }
  .power span {
    position: absolute;
    top: 0; left: 0;
    background-color: #222;
    width: 100%;
    height: 100%;
    border-radius: 0 4px 4px 0;
    box-shadow: inset 0 0 2px white;
  }
  .contents-wrap {
    border: 13px solid #222;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 57px;
    height: 820px;
    width: 395px;

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-top: 80px;
      h2 {
        color: #222;
        margin-bottom: 20px;
        font-size: 40px;
      }
      input, textarea {
        margin-bottom: 20px;
        width: 350px;
      }
      input {
        padding: 10px;
        border: none;
        border: 2px solid #222;
        border-radius: 10px;
        outline: none;
        &:focus {
          border: 2px solid #ccc;
        }
      }
      textarea {
        padding: 10px;
        height: 150px;
        border: none;
        border: 2px solid #222;
        border-radius: 10px;
        outline: none;
        &:focus {
          border: 2px solid #ccc;
        }
      }
      .emotion-box {
        width: 350px;
        background-color: #fff;
        border: 2px solid #222;
        border-radius: 10px;
        padding: 10px;

        display: flex;
        justify-content: space-around;
        align-items: center;

        select {
          width: 50%;
          padding: 10px;
          border: none;
          border: 2px solid #222;
          border-radius: 10px;
        }
      }
      .btn-box {
        margin-top: 100px;
        button {
          width: 350px;
          background-color: #fff;
          border: none;
          border: 2px solid #222;
          border-radius: 10px;
          padding: 10px;
        }
      }
    }
  }
}


`;




const DiaryEditor = ({onCreate}) => {
  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state, [e.target.name] : e.target.value
    })
  }

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("저장성공");
  }

  return (
    <ContainerEditor>
      <div className='mockup'>
        <div className='mobile-mockup'>
          <div className='camera'>
            <span></span>
          </div>
          <div className='volume'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="power">
            <span></span>
          </div>
          <div className='contents-wrap'>
            <div className='content'>
              <h2>Today's Diary</h2>
              <div>
                <input 
                ref={authorInput}
                name='author' 
                value={state.author} 
                onChange={handleChangeState} 
                placeholder='작성자'/>
              </div>
              <div>
                <textarea 
                ref={contentInput}
                name='content' 
                value={state.content} 
                onChange={handleChangeState}
                placeholder='일기'
              />
              </div>
              <div className='emotion-box'>
                <span>오늘의 감정점수 : </span>
                <select 
                name='emotion' 
                value={state.emotion} 
                onChange={handleChangeState}
                >
                  <option value={1}>😀</option>
                  <option value={2}>😁</option>
                  <option value={3}>😂</option>
                  <option value={4}>🤣</option>
                  <option value={5}>😃</option>
                </select>
              </div>
              <div className='btn-box'>
                <button onClick={handleSubmit}>일기 저장하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerEditor>
  )
}

export default DiaryEditor;