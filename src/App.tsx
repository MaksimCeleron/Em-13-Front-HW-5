import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import logo from "./assets/logo.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a
          href="https://github.com/MaksimCeleron/Em-13-Front-HW-5"
          target="_blank"
        >
          <img src={logo} className="logo" alt="MaksimCeleron logo" />
        </a>
      </div>
      <h1>Emolod 13 Front HW 5</h1>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Вбудований клікер у шаблон Vite</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          Кліків: {count}
        </button>
      </div>
      <p className="read-the-docs">
        Натисніть на лого Vite та React щоб дізнатись більше
        <br />
        або на моє лого щоб потрапити в репозиторій
      </p>
    </>
  );
}

export default App;
