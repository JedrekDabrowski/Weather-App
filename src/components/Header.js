import React from 'react';
import '../styles/Header.css';
import winter from '../img/winter.jpg';
import spring from '../img/spring.jpg';
import summer from '../img/summer.jpg';
import autumn from '../img/autumn.jpg';

export default function Header() {
  return (
    <header className='Header'>
      <img src={summer} alt='summer' />
      <img src={autumn} alt='autumn' />
      <img src={winter} alt='winter' />
      <img src={spring} alt='spring' />
    </header>
  );
}
