// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const ref = React.useRef()
  const [error, setError] = React.useState(null)
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(ref.current.value)
  }
  const handleChange = () => {
    const valueIsLowerCase =
      ref.current.value === ref.current.value.toLowerCase()
    setError(valueIsLowerCase ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" ref={ref} onChange={handleChange} />
      </div>
      <button type="submit" disabled={error}>
        Submit
      </button>
      {error && <div role="alert">{error}</div>}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
