import React from 'react'
import { useState } from 'react';

function Search({list}) {
  const [data , setData] = useState(list);
  // console.log(" Movies list from search bar" , list);



  const handleSearch = (e)=>{
    // console.log("Searching");
    let searchItem = []
    let value = e.target.value
    // console.log("search value", value);
    e.preventDefault()
    list.forEach(element => {
      console.log("element", element.name);
      searchItem.push(
       element.name
      )
      // console.log("Search item",searchItem);
    });
    let result =[]
   result = searchItem.filter((data)=>{
    //  console.log("data",data);
    return data.search(value) !== -1
   })
  console.log("result==>",result);
  
   setData(result)

  }

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input  onChange ={(e)=>{handleSearch(e)}}
        type='text'
        placeholder='Search for movie by name' 
        className='w-75 py-2'
        data-testid='search'
      />
      {
        data.map((item)=>{
          console.log("list item ==>",item);
         return(
          <div key = {item.id}>{item.name}</div>
         )
        })
      }
    
    </section>
  )
}

export default Search
