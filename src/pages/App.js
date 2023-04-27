import '../styles/App.css';
import { useNavigate } from 'react-router';

function App() {
  const navigator = useNavigate();
  const moveToAbout = () => {
    navigator('/about');
  };
  return (
    <div className="App">
      <div>메인 화면 여기서 짜시면 됩니다.</div>
      <button onClick={moveToAbout}>페이지이동예시</button>
    </div>
  );
}

export default App;
