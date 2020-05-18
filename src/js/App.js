import React from 'react';
import '../css/App.min.css';

function App() {
  return (
    <div className="App">
<h1>Привет</h1>
        <div><a href = 'https://create-react-app.dev/docs/adding-typescript/' className='link' >Ссылка</a></div>
        <article className="block first">Я Катерина Книженко</article>
        <article className="block" id= 'central-block'>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a> Ссылка</a></li>
        </ul></article>
        <article className="block">Я Катерина Книженко</article>
    </div>
  );
}

export default App;
