import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import styles from './Footer.module.css';

const Footer = ({ count }) => (
    <div className={styles.foter}>
      <div className={styles.box}>Вот что осталось: { count }</div>
      <ButtonGroup size="small" className={styles.group} aria-label="small outlined button group">
        <Button>Все</Button>
        <Button>что делать</Button>
        <Button>что сделано</Button>
      </ButtonGroup>
      <Button className={styles.buton} variant="outlined" size="small">
          Удалить выполненные
      </Button> 
    </div>);

export default Footer;
