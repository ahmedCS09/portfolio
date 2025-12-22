import LandingPage from './pages/LandingPage'
import { Routes, Route } from 'react-router'

function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
