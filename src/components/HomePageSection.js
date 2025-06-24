import { useRef, useState } from 'react';
import { Search } from 'lucide-react';
import './HomePageSection.css';
import CategorySection from './CategorySection';
import BlogCategorySection from './BlogCategorySection';
import Footer from './Footer';
import AboutSection from './AboutSection';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


// Import data from your data folder
import { categories, blogCategories } from '../data/homepageData';

function HomePageSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Section refs
  const topRef = useRef(null);
  const newShowsRef = useRef(null);
  const bestOfRef = useRef(null);
  const blogsRef = useRef(null);
  const aboutRef = useRef(null);


  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    switch (location.hash) {
      case '#newshows':
        scrollToSection(newShowsRef);
        break;
      case '#bestof':
        scrollToSection(bestOfRef);
        break;
      case '#blogs':
        scrollToSection(blogsRef);
        break;
      case '#about':
        scrollToSection(aboutRef);
        break;
      default:
        scrollToSection(topRef);
    }
  }
}, [location.hash]);


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    setIsSearchActive(true);
    console.log('Searching for:', searchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const handleSearchFocus = () => {
    setIsSearchActive(true);
  };

  const scrollToSection = (ref) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (

  <div className="flex flex-col justify-between items-center"> 
    {/* ✅ Top ref anchor */}
    <div ref={topRef}></div>
    <div className="w-full container flex flex-col justify-between items-center">
      <div className="hero-container">
        {/* NavBar */}
        {/* Navbar */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[1200px]  py-6 pt-0 flex justify-between items-center bg-black/40 backdrop-blur-md">
              <div
                onClick={() => scrollToSection(topRef)}
                className="cursor-pointer font-poppins text-[1.5rem] font-semibold text-[var(--text-light)]"
              >
                Sakuga
              </div>
              <ul className="flex gap-8 list-none m-0 p-0 flex-wrap items-center">
                <li><button onClick={() => scrollToSection(newShowsRef)} className="nav-link">New Shows</button></li>
                <li><button onClick={() => scrollToSection(bestOfRef)} className="nav-link">Best of X Category</button></li>
                <li><button onClick={() => scrollToSection(blogsRef)} className="nav-link">New Blogs</button></li>
                <li><button onClick={() => scrollToSection(aboutRef)} className="nav-link">About</button></li>
                <li><a href="#" className="nav-link">Login</a></li>
                <li><a href="#" className="nav-link">Register</a></li>
              </ul>
            </div>
          </div>

        {/* Search Section */}
        {!isSearchActive && (
          <div
            className={`hero-content mt-20 flex flex-col items-center text-center transition-all duration-[1200ms] ease-in-out ${
              isSearchActive ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
            }`}
          >
            <h1 className="text-4xl font-bold font-poppins mb-4">
              Discover Your <span className="text-[#A8E6A1]">Anime</span>
            </h1>
            <p className="text-base text-gray-300 max-w-xl mb-10">
              Explore thousands of anime collection with Sakuga
            </p>
          </div>
        )}

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search your favorite anime..."
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            onFocus={handleSearchFocus}
          />
          <button className="search-button" onClick={handleSearchSubmit}>
            <Search size={24} />
          </button>
        </div>

        {/* Green Separator */}
        <div className="separator"></div>

        {/* ✅ Category and Other Sections — FIXED */}
        <div ref={newShowsRef}>
          <CategorySection title="New Shows" categories={categories} />
        </div>

        <div ref={bestOfRef}>
          <CategorySection title="Best of X Shows" categories={categories} />
        </div>

        <div ref={blogsRef}>
          <BlogCategorySection title="New Blogs" categories={blogCategories} />
        </div>

        <div ref={aboutRef}>
          <AboutSection />
        </div>

      </div>

      
    </div>
    <Footer 
      scrollToSection={scrollToSection}
      topRef={topRef}
      newShowsRef={newShowsRef}
      bestOfRef={bestOfRef}
      blogsRef={blogsRef}
      aboutRef={aboutRef}
    />

  </div> 
  );
}

export default HomePageSection;
