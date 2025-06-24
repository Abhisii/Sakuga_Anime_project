import React, { useState } from 'react';
import { Bookmark } from 'lucide-react';

export default function BookmarkButton({
  defaultBookmarked = false,
  onToggle,
  positionClass = 'bottom-0 right-0', // new!
}) {
  const [bookmarked, setBookmarked] = useState(defaultBookmarked);

  const handleClick = () => {
    const newState = !bookmarked;
    setBookmarked(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <button
      onClick={handleClick}
      className={`absolute ${positionClass} w-11 h-11 flex items-center justify-center rounded-full transition 
        ${bookmarked ? 'bg-[var(--accent-green,#A8E6A1)]' : 'bg-gray-300 hover:bg-gray-400'}
      `}
      title={bookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
    >
      <Bookmark
        size={25}
        className={bookmarked ? 'fill-current text-black' : 'text-black'}
        fill={bookmarked ? 'currentColor' : 'none'}
      />
    </button>
  );
}
