import React, { useState } from 'react'
import Search from './Search'
import Movieslist from './Movieslist'

function Movieform() {
  const [movieName, setMovieName] = useState('')
  const [rating, setRating] = useState('')
  const [duration, setDuration]= useState('')
  const [movieInput, setMovieInput]= useState([])
  

  const addData=(e)=>{
       console.log("working");
       e.preventDefault();
      setMovieName('')
      setDuration('')
      setRating('')
      movieInput.push({
        name: movieName,
        ratings: rating +'/100',
        time: duration
      })
      setMovieInput([...movieInput ])
    }
    

  return (
  <div className='layout-row justify-content-center mt-100'>
    <section className="w-30 mr-75">
      <div className='card pa-30'>
        <form  onSubmit={addData} >
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input  onChange = {(e)=>  setMovieName(e.target.value)}
            value={movieName}
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input  onChange = {(e)=>  setRating(e.target.value)} value={rating}
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input onChange = {(e)=>  setDuration(e.target.value)}
            value={duration}
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
            />
          </div>
          {/* Use this div when time format is invalid */}
          {/* <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
          <div className='layout-row justify-content-end'>
            <button 
            // onClick={addData}
              type='submit'
              className='mx-0'
              data-testid='addButton'
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
      <div className='layout-column w-30'>
          <Search  list={movieInput} />
          {/* <Movieslist list={movieInput} list2={durationInput} list1={ratingInput} />  */}
          <Movieslist list={movieInput} /> 

          <div data-testid='noResult'>
            <h3 className='text-center'>No Results Found</h3>
          </div>
        </div>
        </div>
  )
}

export default Movieform
