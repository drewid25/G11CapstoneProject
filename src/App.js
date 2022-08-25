import {useState,useRef} from 'react'
import Login from "./pages/login";

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
      <Login />

    
    </div>
  );
}

export default App;
