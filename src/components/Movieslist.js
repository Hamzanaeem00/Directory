import React from 'react'

function Movieslist({list, list1 , list2}) {
  console.log('inputs of movie', list);
  console.log('inputs of rating', list1);
  console.log('inputs of duration', list2);

  return (
    <section>
      <ul 
        className='styled w-100 pl-0' 
        data-testid='moviesList'
      >
      <li 
        className='flex slide-up-fade-in justify-content-between'
        style={{borderBottom: '2px solid var(--primary-color)'}}
      >
          {/* use this header for movie name */}
          <div className='layout-column w-40'>
          {
            list?.map((item )=>{
              console.log(item);
              return(
              <div>
                <h3 className='my-3'>{item}</h3>
              </div>
                )
              })
            }
            {
              list1?.map((item)=>{
                return(
                  <div >
                    <p className='my-0'>{item}</p>
                  </div>
                )
              })
            }
            {
              list2?.map((item)=>{
                return(
                  <div className='layout-row my-auto mr-20'>
                    <p className='justify-content-end'>{item}</p>
                  </div>
                )
              })
            }
            </div>
          {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
        <div >
          {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
        </div>
      </li>
      </ul>
    </section>
  )
}

export default Movieslist;
