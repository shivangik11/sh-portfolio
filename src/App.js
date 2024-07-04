import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Analytics />
      </Routes>
    </Router>
  );
}

export default App;
