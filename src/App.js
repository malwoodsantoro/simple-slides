import React, {useState} from 'react';
import './App.css';

import Slides from './components/Slides';
const title = "Slideshow App";

function App({slides}) {
  const [slideNumber, setSlideNumber] = useState(0);
  const length = slides.length;
  const [nextDisable, setNextDisable] = React.useState(false);
  const [prevDisable, setPrevDisable] = React.useState(true);
  const [restartDisable, setRestartDisable] = React.useState(true);

  const onNext = () => {
    if (slideNumber + 2 === slides.length) {
      setNextDisable(true);
      setSlideNumber( slideNumber === length - 1 ? 0 : slideNumber + 1 );
    } else {
      setNextDisable(false);
      setRestartDisable(false);
      setPrevDisable(false);
      setSlideNumber( slideNumber === length - 1 ? 0 : slideNumber + 1 );
    }
  }

  const onPrevious = () => {
    if (slideNumber  === 1) {
      setPrevDisable(true);
      setRestartDisable(true);
      setSlideNumber( slideNumber === 0 ? length - 1 : slideNumber - 1 );
    } else {
      setPrevDisable(false);
      setRestartDisable(false);
      setSlideNumber( slideNumber === 0 ? length - 1 : slideNumber - 1 );
    }
  }

  const onRestart = () => {
    setRestartDisable(true);
    setNextDisable(false);
    setPrevDisable(true);
    setSlideNumber(0);
  }
  
  return (
        <div>
            <div className="App">
                <Slides slides={slides} slideNumber={slideNumber} onNext={onNext} onPrevious={onPrevious} nextDisable={nextDisable} prevDisable={prevDisable} onRestart={onRestart} restartDisable={restartDisable}/>
            </div>
        </div>
    );
}

export default App;
