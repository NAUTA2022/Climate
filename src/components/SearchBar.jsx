import React from 'react';

import style from "./SearchBar.module.css";


export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
          <form 
          className={style.searchBar} 
          onSubmit={(e) => {
             e.preventDefault();

             const input = document.getElementById("cityInput");

             onSearch(input.value);

             input.value= "";
            }}
            >
               <input id="cityInput" className={style.input} placeholder='Search & add cities...' />
                     <button className={style.submit} type="submit">
                     🔎
                            </button>
                           </form>
  );
}