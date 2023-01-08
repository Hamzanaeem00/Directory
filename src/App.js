import React from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

function App() {

  return (
    <div>
      <h8k-navbar header={ title } />
        <div>
          <Movieform />
        </div>
        
      </div>
  )
}

export default App;
