import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (<ul>
      <li><Item todoItem = {'прописать props'} /></li>
      <li><Item todoItem = {todoItem} /></li>
      <li><Item todoItem = {'важное дело'} /></li>
</ul>);

export default ItemList;
