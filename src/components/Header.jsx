//import PropTypes from 'prop-types' not included in packages rn

import Button from "./Button"

const Header = ({ title }) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button />
        {/* <h1 style={{ color: 'red', backgroundColor: 'black'}}>{title}</h1> inline styling */}
    </header>
  )
}


// default value if no arguments are passed
Header.defaultProps = {
    title: 'Task Tracker'
}

// Internal styling
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }


// assigns types to variables i.e React's version of typescript
// Header.propTypes = {
//     title: PropTypes.string.isRequired //defaultProps works for isRequired
//     //value is printed anyways but error occurs on console
// }

export default Header
