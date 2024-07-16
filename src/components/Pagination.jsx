import React, { useState } from 'react'

export default function Pagination({items, itemsPerPage}) {
  const [currentPage, setCurrentPage] = useState(1);

  const lastContentIndex = currentPage*itemsPerPage;
  const firstContentIndex = lastContentIndex - itemsPerPage;

  const currentContents = items.slice(firstContentIndex,lastContentIndex);

  const pageNumbers = [];
  for(let i = 1; i<= Math.ceil(items.length/itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        {currentContents.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
      <ul>
        {pageNumbers.map((num) => (
          <li key={num} onClick={() => setCurrentPage(num)}>{num}</li>
        ))}
      </ul>
    </div>
  )
}
