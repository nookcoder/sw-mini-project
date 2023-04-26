import '../styles/App.css';
import { useNavigate } from 'react-router';
import { writeUserData } from '../modules/firebase/writer';
import imgLogo from '../images/sample.png'

function Card() {
  const navigator = useNavigate();
  const moveToAbout = () => {
    navigator('/about');
    writeUserData();
  };
  return (
    <div className="App">
      {/* <div>메인 화면 여기서 짜시면 됩니다.</div>
    <button onClick={moveToAbout}>페이지이동예시</button> */}

      <div className='Cell' onClick={moveToAbout}>
        <img src={imgLogo} alt='framework' className='Cell-Image' />
        <div className='Cell-Description'>
          <div className='Cell-Title'>Framework</div>
          <div className='Tag-Space'>
            <div className='Tag' id='frontend-tag'>Frontend</div>
            <div className='Tag' id='swift-tag'>Swift</div>
          </div>
        </div>
      </div>

    </div>
  );
}

function generateCard() {
  let arr = []

  for (let i = 0; i < 9; i++) {
    arr.push(
      <Card className="card"></Card>
    )
  }

  return arr
}

function App() {
  const navigator = useNavigate();
  const moveToAbout = () => {
    navigator('/about');
    writeUserData();
  };
  return (
    <div className="App">
      <div className="text">
        <h2 className="subject">Web 제목</h2>
        <h3 className="description">부가설명</h3>
      </div>
      {/* <div>메인 화면 여기서 짜시면 됩니다.</div>
      <button onClick={moveToAbout}>페이지이동예시</button> */}
      <div className="grid">
        {generateCard()}
      </div>



    </div>
  );
}

export default App;
