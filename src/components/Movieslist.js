import React from 'react'

function Movieslist({list}) {
  console.log('inputs of movie', list);
  // console.log('inputs of rating', list1);
  // console.log('inputs of duration', list2);

  return (
    <section>
        { list?.map((item) =>{
              console.log("item===>",item);
              return(
      <ul 
        className='styled w-100 pl-0' 
        data-testid='moviesList'
      >
      <li 
        className='flex slide-up-fade-in justify-content-between'
        style={{borderBottom: '2px solid var(--primary-color)'}}
      >
          {/* use this header for movie name */}
        
                <div  className='layout-column '>
              <div>
                <h3 className='my-3'  >{item.name}</h3>
              </div>
               
                <div >
                    <p className='my-0'>{item.ratings}</p>
                  </div>
            </div>
                  <div className='layout-row my-auto mr-20'>
                    <p className='justify-content-end'>{item.time}</p>
                  </div>
                  
            
          {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
        <div >
          {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
        </div>
      </li>
      </ul>
      )
    })
  } 
    </section>
  )
}

export default Movieslist;
