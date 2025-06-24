import React, { useState } from 'react';

const StaffSection = ({ staff, onStaffClick }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleStaff = showAll ? staff : staff.slice(0, 4);

  return (
    <section className="container mx-auto my-8 flex-1">
      <div className="flex justify-between items-center mb-4">
        <h2 className="section-title">Staff</h2>
        {staff.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-[var(--accent-green,#A8E6A1)] hover:underline"
          >
            {showAll ? 'View Less' : 'View All'}
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 place-items-center">
        {visibleStaff.map((member, idx) => (
          <div
            key={idx}
            onClick={() => onStaffClick(member)} // ✅ pass clicked member
            className="cursor-pointer bg-[var(--card-bg,#131313)] hover:bg-[var(--card-hover,#1E1E1E)] transition flex flex-row items-center justify-between rounded-lg w-full max-w-[1104px]"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-[123px] h-[123px] rounded-tl-lg rounded-bl-lg object-cover"
            />
            <div className='p-5'>
              <h1 className="text-lg text-right">{member.name}</h1>
              <p className="text-sm text-right pt-9">{member.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaffSection;
