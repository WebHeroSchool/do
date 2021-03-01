import React from 'react';
import Item from '../Item/Item';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const ItemList = ({ items }) => (<ul>
      { items.map(item => ( <li key={item.value}>
            <Checkbox />
            <Item value={ item.value } isDone={item.isDone} /> 
            <Button variant="outlined" size="medium" color="primary">
                  Удалить
            </Button>
            <IconButton aria-label="delete">
                  <DeleteIcon />
            </IconButton>
            </li> ))}
</ul>);

export default ItemList;
