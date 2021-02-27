import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => { 
      const items = [
            { value: 'Написать новое приложение'},
            { value: 'Прописать props'},
            { value: 'Сделать все дела'}
      ];
      return (<div className="block">
            <h1 className="block__title">Важные дела:</h1>
            <InputItem />
            <ItemList items = { items } />
            <Footer count = {3} />
      </div>);
};

export default App;
