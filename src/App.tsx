import { useState } from "react";
import "./app.css";
import { useWindowSize } from 'react-use'
import ReactConfetti from "react-confetti";
import Img from "./img.jpeg"

const App = () => {
  const { width, height } = useWindowSize()
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [run, setRun] = useState<boolean>(false);

  const handleClick = () => {
    setRun(true);
    const BackgroundAudio = new Audio("src/vasco.mp3");
    BackgroundAudio.play();
    const BackgroundAudio2 = new Audio("src/atumalaca.mp3");
    BackgroundAudio2.play();
  };

  const handleNo = () => {
    alert("Não existe essa opção ❤️😊");
    setIsDisabled(true);
  };

  return (
    <div id="content" style={ run ? { gap: 14 } : {}}>
      <h1>{ run ? ",obrigado!. 😭" : "me perdoa pf 😞😞" }</h1>
      {
        run && (
          <div className="imagens">
            <img src="https://pbs.twimg.com/media/FKyx0vYXsAIWhdQ.jpg:large" width={150} />
            <img src={ Img } alt="" width={150} />
          </div>
        )
      }

      <div id="buttons" >
        <button onClick={ handleNo } className={ (run || isDisabled) ? "d-none" : ""}>aff, não nunca 🙄</button>
        <button id="yes" onClick={ handleClick } className={ run ? "d-none" : ""}>
          sim, ó meu rei
        </button>
      </div>

      <ReactConfetti
        width={width}
        height={height}
        run={run}
      />

      <span className="text-muted">by: matheus 01 👑</span>
    </div>
  );
};

export { App };
