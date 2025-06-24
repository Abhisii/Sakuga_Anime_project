import React, { useRef, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '../Footer';
import BlogCategorySection from '../BlogCategorySection.js';
import StaffSection from './StaffSection.js';
import StaffDetail from './StaffDetail.js';
import '../HomePageSection.css';
import BookmarkPopup from '../BookmarkButton.js'; // adjust path if needed
import BookmarkButton from '../BookmarkButton'; // correct path if needed


import './MediaPage.css';
import CommentSection from './CommentSection';
import { categories, blogCategories, commentData } from '../../data/homepageData.js';

const allMedia = [...categories, ...blogCategories];

const PLACEHOLDER = {
  director: 'Unknown',
  release: 'Unknown',
  achievements: [],
  staff: [],
  banner: '',
};




const MediaPage = () => {
  const { animeName } = useParams();
  const location = useLocation();
  const decodedName = decodeURIComponent(animeName ?? '');


  const passedData = location.state;
  const lookedUpData = allMedia.find((m) => m.name === decodedName);
  const base = passedData || lookedUpData || { name: decodedName };

  const data = { ...PLACEHOLDER, ...base, title: base.name || PLACEHOLDER.title };

  const achievementsRef = useRef(null);
  const scrollAchievements = (dir) => {
    achievementsRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' });
  };

  const [selectedStaff, setSelectedStaff] = useState(null);
  const navigate = useNavigate();
  

  return (
    <div className='w-full'>
      <div className="media-page flex flex-col min-h-screen text-white items-center">

        {/* ✅ Hero Banner with Navbar inside */}
        {!selectedStaff ? (
          <>
        <div className="relative w-full h-[280px]">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center -z-10"
            style={{
              backgroundImage: `url(${data.banner || data.image || 'https://via.placeholder.com/1200x400'})`
            }}
          />

          {/* Navbar */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[1200px] px-8 py-6 flex justify-between items-center bg-black/40 backdrop-blur-md">
              <div
                className="font-poppins text-[1.5rem] font-semibold text-[var(--text-light)] cursor-pointer"
                onClick={() => navigate('/')}
              >
                Sakuga
              </div>
              <ul className="flex gap-8 list-none m-0 p-0 flex-wrap items-center">
                <li><button onClick={() => navigate('/#newshows')} className="nav-link">New Shows</button></li>
                <li><button onClick={() => navigate('/#bestof')} className="nav-link">Best of X Category</button></li>
                <li><button onClick={() => navigate('/#blogs')} className="nav-link">New Blogs</button></li>
                <li><button onClick={() => navigate('/#about')} className="nav-link">About</button></li>
                <li><a href="#" className="nav-link">Login</a></li>
                <li><a href="#" className="nav-link">Register</a></li>
              </ul>
            </div>
          </div>


          {/* Optional gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent -z-10" />
        </div>

        {/* ✅ Conditional: Show StaffDetail or normal page */}
        
            {/* ─────────── Meta Info ─────────── */}
            <div className="w-full max-w-[1200px] h-[410px] mx-auto flex flex-col md:flex-row items-center justify-between p-8 pb-0 pt-0 box-border -mt-[60px] z-10 relative">
              <div className="relative w-[220px] h-[400px] pb-70">

                {/* ✅ NEW: make this relative, wrap only the image */}
                <div className="relative w-full h-[300px]">
                  <img
                    src={data.poster || data.image}
                    alt={`${data.title} poster`}
                    className="w-full h-full object-cover rounded-md"
                  />

                  {/* ✅ Now it aligns to the image, not the full div */}
                  <BookmarkButton title={data.title} positionClass="bottom-2 right-2" />
                </div>

                <p className="text-xs text-center mt-2 text-gray-400 pb-70">
                  {data.release || 'Release date TBD'}
                </p>
              </div>


              <div className="flex flex-col w-[900px] py-9 items-center md:items-start text-center md:text-left space-y-2 max-w-[1200px]">
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold font-poppins leading-tight pt-9">
                    {data.title}
                  </h1>
                  {data.director && (
                    <p className="text-lg md:text-xl text-gray-300 pb-6">Directed by {data.director}</p>
                  )}
                </div>

                {/* ─────────── Achievements Section ─────────── */}
                {data.achievements?.length > 0 && (
                  <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-between py-8 pt-0 box-border">
                    <section className="container w-full">
                      
                      <div className="relative w-full">
                        <button
                          onClick={() => scrollAchievements(-1)}
                          className="group absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 hover:bg-black/80 rounded-full"
                        >
                          <ChevronLeft size={24} className="group-hover:text-[var(--accent-green)]" />
                        </button>

                        <div
                          ref={achievementsRef}
                          className="flex space-x-4 overflow-x-auto pb-4 pr-6 scrollbar-hide"
                        >
                          {data.achievements.map((award, idx) => (
                            <div
                              key={idx}
                              className="min-w-[170px] h-[170px] flex flex-col items-center justify-center bg-black hover:bg-[var(--card-hover,#131313)] rounded-lg p-4 transition"
                            >
                              <img src={award.icon} alt="award" className="w-30 h-30 mb-2 object-contain" />
                              <p className="text-xs leading-tight text-center">{award.label}</p>
                              <p className="text-[10px] text-gray-400 text-center">{award.recipient}</p>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={() => scrollAchievements(1)}
                          className="group absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 hover:bg-black/80 rounded-full"
                        >
                          <ChevronRight size={24} className="group-hover:text-[var(--accent-green)]" />
                        </button>
                      </div>
                    </section>
                  </div>
                )}
              </div>
            </div>

            <div className="w-full max-w-[1200px] h-[250px] mx-auto flex flex-col md:flex-row items-center justify-between p-8 pb-0 pt-0 box-border -mt-[60px] z-10 relative">

                  {/* ─────────── Comment Section ─────────── */}
              <div className="comment-section w-full h-[180px] rounded-md overflow-hidden mx-auto justify-between">
                <CommentSection title="User Comments" comments={commentData} />
              </div>
            </div>
            

            {/* ─────────── Staff Section ─────────── */}
            {data.staff?.length > 0 && (
              <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between p-8 pt-0 box-border">
                <StaffSection
                  staff={data.staff}
                  onStaffClick={setSelectedStaff}
                />
              </div>
            )}

            <BlogCategorySection title="New Blogs" categories={blogCategories} />
          </>
        ) : (
          <StaffDetail
            staff={selectedStaff}
            onBack={() => setSelectedStaff(null)}
            animeName={data.title}
          />
        )}
      </div>
      
      <Footer goHome={() => navigate('/')} />
    </div>
  );
};

export default MediaPage;
