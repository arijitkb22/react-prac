import React, { useState } from 'react'

export default function Search() {
  const items = ["item 1", " item 2", "item 3", "item 4", "object 1", "object 2"]

  const [searchText, setSearchText] = useState('');

  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(searchText.toLowerCase())
  });

  return (
    <>
    <input type='text' placeholder='search...' onChange={(e) => setSearchText(e.target.value)}/>
    <ul>
      {filteredItems.map((item, index) => 
        <li key={index}> {item} </li>
      )}
    </ul>
    </>
  )
}
