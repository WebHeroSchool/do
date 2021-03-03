import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  const  items=[
    { value: 'Написать новое приложение',
      isDone: true
    },
    { value: 'Прописать props',
      isDone: false
    },
    { value: 'Сделать все дела',
      isDone: true
    }
  ];
  render() {
    return ( 
          <div className={styles.block}>
            <h1 className={styles.title}>Важные дела:</h1>
            <InputItem />
            <ItemList items = { items } />
            <Footer count = {3} />
          </div>);
  }
}

export default App;
