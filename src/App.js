import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePageSection from './components/HomePageSection';
import MediaPage from './components/media-page/MediaPage';

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<HomePageSection />} />
          <Route path="/media/:animeName" element={<MediaPage />} />
        </Routes>
      
    </Router>
  );
}

export default App;
