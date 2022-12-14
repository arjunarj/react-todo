const Button = ({ color, text }) => {

  return (
    <button style={{backgroundColor: color}} className="btn">{text}</button>
  )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Add'
}

export default Button
