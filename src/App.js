import React from 'react';
import PropTypes from 'prop-types';
/*
function App() {
  return (
    <React.Fragment>
      <label htmlFor='bar'>bar</label>
      <input type="text" onChange={() => { console.log("I'm clicked!") }} />
    </React.Fragment>
  );
}
*/

const App = () => {
  const profiles = [
    { name: 'joma', age: 21 },
    { name: "daiki", age: 22 },
    { name: 'Noname' }
  ]
  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}
/*
User.defaultProps = {
  age: 1
}
*/

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
