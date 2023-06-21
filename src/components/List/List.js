import  styles from "./List.module.css";
//import { ReactComponent as HeartIcons } from "../../basket.svg";
import img from "../../basked.png";
export const List = (props) => {
  
  return (
    
    <div className={styles.inner}>
      <label className={styles.lobel}>
       <div className={styles.input_wrapper}>
        <input
         type="checkbox"
          onChange={() => {props.handleActiveTodo(props.item.todo)}} 
          defaultChecked = {props.item.active}
          // checked={!props.item.active} 
          className={styles.checkbox}  />
         <span className={styles.fakeBtn}></span>
         <span className={styles.lobelText}>{props.item.todo}</span>
         </div>
        {
          !props.item.active && 
          <input onClick={() => { props.handleDeleteTodo(props.item.todo); }} type="image" src={img} alt="img" className={styles.btn} /> 
          }
      </label>  
    </div>
  )
}

