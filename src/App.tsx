import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import logo from "./assets/logo.jpg";
import "./App.css";
import NewsBlock from './components/NewsBlock'
import data from './fixtures/newsData.json'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='newsDiv'>
        {
          data.map(object => { return <NewsBlock key={object.id} {...object} /> })
        }
      </div>
    </>
  );
}

export default App;
