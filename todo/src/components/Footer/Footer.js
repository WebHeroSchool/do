import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Footer = ({ count }) => (<div>
      <div>Вот что осталось: { count }</div>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button>Все</Button>
        <Button>что делать</Button>
        <Button>что сделано</Button>
      </ButtonGroup>
      <Button variant="outlined" size="medium" color="primary">
          Удалить выполненные дела
      </Button>
   
     
   </div>);

export default Footer;
