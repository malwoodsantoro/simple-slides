import React from 'react';

function Slides({slides, slideNumber, onNext, onPrevious, nextDisable, prevDisable, onRestart, restartDisable}) {

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" onClick={onRestart} disabled={restartDisable}>Restart</button>
                <button data-testid="button-prev" onClick={onPrevious} disabled={prevDisable}>Prev</button>
                <button data-testid="button-next" onClick={onNext} disabled={nextDisable}>Next</button>
            </div>
            <div id="slide" className="card text-center">
              <h1 data-testid="title">{slides[slideNumber].title}</h1>
                <p data-testid="text">{slides[slideNumber].text}</p>
            </div>
        </div>
    );

}

export default Slides;
