import './App.css';
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import DiaryEditor from './Components/DiaryEditor';
import DiaryList from './Components/DiaryList';
import { useState, useRef } from 'react';


const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
`
const ContainerApp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

`;

const WrapEditor = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapList = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// background-color: #DDE6ED;
function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(1);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data])
  }

  const onDelete = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(data.map((it) => (
      it.id === targetId ? {...it, content: newContent} : it
    )));
  }

  return (
    <>
    <GlobalStyle />
      <ContainerApp>
        <WrapEditor>
          <DiaryEditor onCreate={onCreate}/>
        </WrapEditor>
        <WrapList>
          <DiaryList 
          data={data} 
          onDelete={onDelete} 
          onEdit={onEdit} 
          />
        </WrapList>
      </ContainerApp>
    </>
  );
}

export default App;
