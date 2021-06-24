import PropTypes from 'prop-types'
// import { useLocation } from 'react-router-dom'
import Button from './Button'
import './NotesTracker.css';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
      color={showAdd ? 'black' : 'green'}
      text={showAdd ? 'Close' : 'Add'}
      onClick={onAdd}/>
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
