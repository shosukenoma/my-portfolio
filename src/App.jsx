import { useState, useEffect } from 'react'
import './App.css'
import fetchRepoByName from './fetchRepoByName'

function App() {

  const [repo, setRepo] = useState({})

  useEffect(() => {
    fetchRepoByName("stock-price-scraper")
      .then(setRepo)
  }, [])

  return (
    <>
      <p>{repo.name}</p>
    </>
  )
}

export default App
