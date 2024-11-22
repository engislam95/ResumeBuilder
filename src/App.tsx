import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout'
import Home from './pages/HomeScreen';
import Settings from './pages/Settings';

function App() {

  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  </BrowserRouter>
  )
}

export default App
