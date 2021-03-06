import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        items: [
          { value: 'Написать новое приложение',
            isDone: false,
            id: 1
          },
          { value: 'Прописать props',
            isDone: false,
            id: 2
          },
          { value: 'Сделать все дела',
            isDone: false,
            id: 3
          }
        ]
      };
    this.onClickDone=this.onClickDone.bind(this); 
  }
  
  onClickDone(id) {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    this.setState({items: newItemList});
  }

  render() {
    return ( 
          <div className={styles.block}>
            <h1 className={styles.title}>Важные дела:</h1>
            <InputItem />
            <ItemList items = { this.state.items } onClickDone={this.onClickDone} />
            <Footer count = {3} />
          </div>);
  }
}

export default App;
