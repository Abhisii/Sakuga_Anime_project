import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategorySection = ({ title, categories }) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeftArrow(el.scrollLeft > 0);
    setShowRightArrow(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
    }
    return () => el?.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="category-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        
      </div>

      <div className="relative max-w-[1200px] mx-auto overflow-hidden">
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="group absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
          >
            <ChevronLeft
              size={24}
              className="transition-colors group-hover:text-[var(--accent-green)]"
            />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex space-x-4 py-4 px-2 scroll-smooth"
          style={{
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          onWheel={(e) => e.preventDefault()}
        >
          {categories.map((cat) => {
  const { name, description, image, ...rest } = cat;   // ← grab fields

  return (
    <Link
      key={name}
      to={`media/${encodeURIComponent(name)}`}
      className="relative group min-w-[200px] h-[260px] bg-[#131313] hover:bg-[#1E1E1E] text-white flex items-center justify-center rounded-xl shadow-md hover:shadow-lg cursor-pointer transition-all overflow-hidden"
    >
  <img
    src={image}
    alt={name}
    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
    loading="lazy"
  />

  <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-[35%] bg-black/80 text-white flex flex-col items-center justify-center overflow-hidden px-3 py-0 group-hover:py-2 transition-all duration-300 ease-in-out">
    <h3 className="text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {name}
    </h3>
    <p className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {description}
    </p>
  </div>
</Link>

  );
})}

        </div>

        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="group absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
          >
            <ChevronRight
              size={24}
              className="transition-colors group-hover:text-[var(--accent-green)]"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default CategorySection;
