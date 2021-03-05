import React from 'react';
import Item from '../Item/Item';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone }) => (<ul className={styles.ul}>
      { items.map(item => ( <li className={styles.li} key={item.value}>
            <Checkbox onClick={() => onClickDone(item.isDone)} />
            <Item value={ item.value } isDone={item.isDone} /> 
            <IconButton aria-label="delete">
                  <DeleteIcon />
            </IconButton>
            </li> ))}
</ul>);

export default ItemList;
