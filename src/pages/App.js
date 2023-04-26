import '../styles/App.css';
import { useNavigate } from 'react-router';
import { writeUserData } from '../modules/firebase/writer';
import imgLogo from '../images/sample.png'
import WebLogo from '../images/WebLogo.svg'

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

function Header() {
  return (
    <header className='Header'>
      <div className='Header-Desc'>
        <a href='/'><img src={WebLogo} alt='logo' className='Header-Logo' /></a>
        <h1 className='Header-Title'><a href='/'>somacritic</a></h1>
      </div>
      <nav className='Header-Items'>
        <ul>
          <li><a href="https://ko.wikipedia.org/wiki/%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC">Framework</a></li>
          <li><a href="https://ko.wikipedia.org/wiki/%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC_(%EC%BB%B4%ED%93%A8%ED%8C%85)">Library</a></li>
          <li><a href="https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EC%96%B8%EC%96%B4">Language</a></li>
        </ul>
      </nav>
    </header>
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
  return (
    <div className="App">
      {Header()}
      <div className="grid">
        {generateCard()}
      </div>
    </div>
  );
}

export default App;
