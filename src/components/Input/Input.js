import { React, useState } from "react";
import styles from './Input.module.css';


export function Input(props) {
  
  const [message, setMessage] = useState("");


   const handleCgange = Event => {
    setMessage(Event.target.value);
  };
 
  const handleClick = Event => {
    Event.preventDefault();
    props.clickAddTodo(message)
    console.log('handleClick', message);
    };

  return (
    <div className={styles.inner}>
    <form onSubmit={handleClick} className={styles.form}>
  
      <input
       required
       className={styles.innerInput} 
       type = "text"
       placeholder ="What will you do today?"
       name="message"
       onChange={handleCgange}
       value={message}
       autoComplete="off"
       />
      <input type='submit' disabled={message.length > 5 ? false : true} className={styles.innerBtn} value="ADD"/>
      </form>
   </div>
  )
}
