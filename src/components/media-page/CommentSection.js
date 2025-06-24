import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CommentSection = ({ title, comments }) => {
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
    <div className="category-section -my-1">
      <div className="relative max-w-[1200px] mx-auto overflow-hidden">
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="group absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
          >
            <ChevronLeft size={24} className="group-hover:text-[var(--accent-green)]" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex space-x-4 scroll-smooth pr-6"
          style={{
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          onWheel={(e) => e.preventDefault()}
        >
          {comments.map(({ user, text, avatar, time, likes, replies }, idx) => (
            <div
              key={idx}
              className="min-w-[420px] h-[180px] bg-[#131313] hover:bg-[#1E1E1E] text-white rounded-xl shadow-md hover:shadow-lg p-4 flex flex-col justify-between"
            >
              {/* Top Row: Avatar, User, Time */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={avatar} alt={user} className="w-10 h-10 rounded-full object-cover" />
                  <div className=''>
                    <span className="font-semibold text-sm block">{user}</span>
                    <span className="text-xs text-gray-400">{time}</span>
                  </div>
                </div>
              </div>

              {/* Comment Text - Centered */}
              <div className="flex-1 flex items-top justify-right pt-2">
                <p className="text-sm text-center text-gray-300 line-clamp-3 px-2">{text}</p>
              </div>

              {/* Bottom Row: Likes & Replies */}
              <div className="flex items-right justify-right  text-xs">
                <button className="hover:text-white cursor-pointer pr-3">❤️ {likes} Likes</button>
                <button className="hover:text-white cursor-pointer">💬 {replies} Replies</button>
              </div>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="group absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
          >
            <ChevronRight size={24} className="group-hover:text-[var(--accent-green)]" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
