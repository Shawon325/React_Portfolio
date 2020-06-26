import React from 'react';
import ServicePage from './pages/ServicePage';
import ContactSection from './components/ContactSection/ContactSection'
import {BrowserRouter} from 'react-router-dom'
import AppRoute from './routes/AppRoute';

function App() {
  return (
    <BrowserRouter>
      <AppRoute/>
    </BrowserRouter>
  );
}

export default App;
