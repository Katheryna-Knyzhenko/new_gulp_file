import React from 'react';
import '../css/App.min.css';

function App2() {
  return (
    <div className="App2">
<h1>Привіт</h1>
        <article>Я Катерина Нікітченко</article>
        <img src={require('../bird.jpg')}></img>
        <div id="grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  );
}

export default App2;
