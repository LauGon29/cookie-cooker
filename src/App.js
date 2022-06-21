import { useState } from 'react';
import './App.css';
import { cookCookie } from './services/cookieCookingService';
import Button from './components/Button/Button';

function App() {
  const [cookieList, setCookieList] = useState([]);
  const cookieAction = async () => {
    const cookieCooked = await cookCookie();
    if (cookieCooked) {
      setCookieList([...cookieList, cookieCooked]);
    }
  }

  return (
    <div className='main-container'>
      {cookieList.length
        ? <div className='cookies-container'>
          {cookieList.map((item, index) => {
            return (
              <span key={`cookie-${index}`}>{item}</span>
            )
          })}
        </div>
        : <h2> No cookies cooked yet!</h2>
      }
      <Button text={'Cook Cookie'} action={cookieAction} />
    </div>
  );
}

export default App;
