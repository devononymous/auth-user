
import './App.css'
import SignIn from './Screens/SignIn'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Screens/admin/Dashboard';
import Invoices from './Screens/user/Invoices';
function App() {

  return (
   <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/user" element={<Invoices/>} />
      </Routes>
    </Router>
  )
}

export default App
