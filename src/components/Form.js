import React from 'react';

const Form = (props) => {
    return ( 
        <form onSubmit={props.submit} className="Form">
            <input type="text" value={props.value} onChange={props.change} placeholder="Wpisz nazwę miasta"/>
            <button onClick ={props.slideDown}>Wyszukaj</button>
        </form>
     );
}
 
export default Form;