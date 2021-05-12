import React from 'react';

export default function Form({ slideDown, submit, value, change }) {
  return (
    <form onSubmit={submit} className='Form'>
      <input
        type='text'
        value={value}
        onChange={change}
        placeholder='Wpisz nazwę miasta'
      />
      <button onClick={slideDown}>Wyszukaj</button>
    </form>
  );
}
