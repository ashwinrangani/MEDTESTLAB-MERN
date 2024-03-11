import { Pagination } from 'flowbite-react';
import { useState } from 'react';


function Paginate( { currentPage, onPageChange }) {
  



  return (
    <div className="flex overflow-x-auto justify-center">
      <Pagination  currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
    </div>
  );
}

export default Paginate;