import React from 'react'
import Header from './components/Header.jsx'
import Slider from './components/Slider.jsx'
import ProductionHouse from './components/ProductionHouse.jsx'
import GenreMovieList from './components/GenreMovieList.jsx'
import MovieList from './components/MovieList.jsx'


function App() {

  return (
      <div className="bg-[#000000] min-h-screen">
        <Header />
        <Slider />
        <ProductionHouse />
        <GenreMovieList />
      </div>
  
  )
}

export default App
