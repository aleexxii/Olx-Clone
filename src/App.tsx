
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './components/main'
import Details from './components/Details'



function App() {
  return (
    <>
    <Routes >
      <Route path='/' element={<Main />}/>
      <Route path='/details' element={<Details />} />
    </Routes>
    </>
  )
}

export default App
