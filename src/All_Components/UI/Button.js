import classes from './Button.module.css'

const Button = (props) => {
  return (
    <button className={classes.button} type={props.type} disabled={props.disabled} onClick={props.onClick}>
      <span>{props.button_name}</span>
    </button>
  )
}

export default Button