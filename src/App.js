import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePageSection from './components/HomePageSection';
import MediaPage from './components/media-page/MediaPage';

function App() {
  return (
    <BrowserRouter basename="/Sakuga_Anime_project">
      
        <Routes>
          <Route path="/" element={<HomePageSection />} />
          <Route path="/media/:animeName" element={<MediaPage />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
