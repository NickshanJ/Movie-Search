import React from 'react';

const Pagination = ({ currentPage, onPrev, onNext }) => (
  <div className="flex justify-center my-4">
    <button
      onClick={onPrev}
      disabled={currentPage === 1}
      className="p-2 mx-2 bg-gray-200 rounded disabled:opacity-50"
    >
      Previous
    </button>
    <span className="p-2">Page {currentPage}</span>
    <button onClick={onNext} className="p-2 mx-2 bg-gray-200 rounded">
      Next
    </button>
  </div>
);

export default Pagination;
