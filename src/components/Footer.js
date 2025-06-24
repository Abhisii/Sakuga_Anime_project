import { Instagram, Facebook, Twitter } from 'lucide-react';

function Footer({ scrollToSection, topRef, newShowsRef, bestOfRef, blogsRef, aboutRef, goHome }) {
  return (
    <footer className="w-full bg-[#111] text-white py-6 px-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-700">
      
      {/* Left - Logo or Title */}
      <div 
        className="text-xl font-semibold mb-4 md:mb-0 cursor-pointer"
        onClick={() => {
          if (goHome) {
            goHome();
          } else {
            scrollToSection?.(topRef);
          }
        }}
      >
        Sakuga
      </div>

      {/* Center - Navigation */}
      <ul className="flex space-x-6 mb-4 md:mb-0 text-sm">
        <li>
          <button 
            onClick={() => {
              if (goHome) goHome();
              else scrollToSection?.(newShowsRef);
            }}
            className="hover:text-[var(--accent-green)] transition-colors"
          >
            New Shows
          </button>
        </li>
        <li>
          <button 
            onClick={() => {
              if (goHome) goHome();
              else scrollToSection?.(bestOfRef);
            }}
            className="hover:text-[var(--accent-green)] transition-colors"
          >
            Best of X Category
          </button>
        </li>
        <li>
          <button 
            onClick={() => {
              if (goHome) goHome();
              else scrollToSection?.(blogsRef);
            }}
            className="hover:text-[var(--accent-green)] transition-colors"
          >
            New Blogs
          </button>
        </li>
        <li>
          <button 
            onClick={() => {
              if (goHome) goHome();
              else scrollToSection?.(aboutRef);
            }}
            className="hover:text-[var(--accent-green)] transition-colors"
          >
            About
          </button>
        </li>
      </ul>

      {/* Right - Social Icons */}
      <div className="flex space-x-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="hover:text-[var(--accent-green)] transition-colors" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="hover:text-[var(--accent-green)] transition-colors" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="hover:text-[var(--accent-green)] transition-colors" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
