import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QNAList from './pages/boards';
import QNADetail from './pages/boards/[boardId]';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{textAlign:"center"}}>
        <Routes>
          <Route path="/" element={<QNAList />} />
          <Route path="/qna/:boardId" element={<QNADetail />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}