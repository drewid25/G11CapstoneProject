import {useState,useRef} from 'react'


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
      <Login/>
      <form className="bg-black h-100 w-100" onSubmit={handleSubmit}>
        <input type="text" ref={refContainer} />
        <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App;
