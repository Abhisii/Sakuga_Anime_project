import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StaffDetail({ staff, onBack, animeName }) {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  // ✅ If no staff, render nothing
  if (!staff) return null;

  // ✅ Safe fallback for related works
  const relatedWorks = staff.relatedWorks || [];
  const visibleWorks = showAll ? relatedWorks : relatedWorks.slice(0, 4);

  return (
    <div className="w-full flex flex-col items-center">
      {/* ✅ Navbar */}
      <div className="w-full flex justify-center z-20">
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

      {/* Breadcrumb */}
      <div className="p-8 w-full max-w-[1200px]">
        <div className="mb-4 text-white">
          <button
            onClick={onBack}
            className="hover:underline hover:text-[var(--accent-green)] transition-colors duration-200"
          >
            {animeName}
          </button>
          <span className="mx-2">/</span>
          <span>Staff</span>
        </div>

        {/* Main Info */}
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={staff.image}
            alt={staff.name}
            className="w-65 h-70 rounded-lg object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-white">{staff.name}</h1>
            <p className="text-gray-300 mt-4 max-w-lg">{staff.description}</p>
          </div>
        </div>

        {/* Related Works */}
        {relatedWorks.length > 0 && (
          <>
            <div className="flex justify-between items-center mt-12 mb-4">
              <h2 className="text-2xl font-semibold text-white">
                Related Works
              </h2>
              {relatedWorks.length > 4 && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-[var(--accent-green)] underline"
                >
                  {showAll ? 'View Less' : 'View More'}
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {visibleWorks.map((work, idx) => (
                <div
                  key={idx}
                  className="relative group min-h-[300px] bg-[#131313] hover:bg-[#1E1E1E] text-white rounded-xl shadow-md hover:shadow-lg cursor-pointer transition-all overflow-hidden"
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                    loading="lazy"
                  />

                  <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-[35%] bg-black/80 flex flex-col items-center justify-center overflow-hidden px-3 py-0 group-hover:py-2 transition-all duration-300 ease-in-out">
                    <h3 className="text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {work.title}
                    </h3>
                    {work.description && (
                      <p className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {work.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
