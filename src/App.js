import {useState,useRef} from 'react'
import './App.css';

function App() {
  const refContainer = useRef(null)
  const [user,setUser] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(refContainer.current.value)
   
  }
   console.log(user)
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" ref={refContainer} />
        <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App;
