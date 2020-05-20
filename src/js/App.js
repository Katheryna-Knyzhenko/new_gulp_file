import React from 'react';
import '../css/App.min.css';

function App() {
  return (

    <div className="App">
<h1 className='h1'>Привет</h1>
      <p><a href = 'https://create-react-app.dev/docs/adding-typescript/' className='link' >Ссылка</a></p>
        <article className="block first">Я Катерина Книженко</article>
        <article className="block" id= 'central-block'>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href = 'https://create-react-app.dev/docs/adding-typescript/' > Ссылка</a></li>
        </ul></article>
        <article className="block">Препроцессинг
            Написание CSS само по себе весело, но когда таблица стилей становится огромной, то становится и сложно её обслуживать. И вот в таком случае нам поможет препроцессор. Sass позволяет использовать функции недоступные в самом CSS, например, переменные, вложенности, миксины, наследование и другие приятные вещи, возвращающие удобство написания CSS.

            Как только Вы начинаете пользоваться Sass, препроцессор обрабатывает ваш Sass-файл и сохраняет его как простой CSS-файл, который Вы сможете использовать на любом сайте.
        </article>
        <footer><a href = 'https://sass-scss.ru/guide/' className='link2'>Ссылка</a></footer>
    </div>

  );
}

export default App;
