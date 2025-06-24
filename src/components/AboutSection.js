function AboutSection() {
  return (
    <div className="category-section ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Box - Logo */}
        <div className="flex items-center justify-center p-8">
          <h2 className="text-4xl font-bold text-white font-poppins">Sakuga</h2>
        </div>

        {/* Right Box - About Text */}
        <div className="bg-[#1f1f1f] rounded-2xl shadow-md p-8 text-gray-300 text-base leading-relaxed">
          Sakuga is your ultimate platform to explore a curated collection of anime shows and insightful blogs.
          From thrilling action series to heartwarming romances, and in-depth industry analysis — we've got it all.
          <br></br>
          Discover new releases, deep dives, and behind-the-scenes content that celebrates the world of anime.
        </div>

      </div>
    </div>
  );
}

export default AboutSection;
