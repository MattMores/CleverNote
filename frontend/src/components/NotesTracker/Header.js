import PropTypes from 'prop-types'
// import { useLocation } from 'react-router-dom'
import Button from './Button'
import './NotesTracker.css';

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color="green" text="Add"
      onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Set List',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
