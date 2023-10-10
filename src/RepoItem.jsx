import { useState, useEffect } from 'react'
import fetchRepoByName from './fetchRepoByName'

function RepoItem({ repoName }) {

  const [repo, setRepo] = useState({})

  useEffect(() => {
    fetchRepoByName(repoName)
      .then(setRepo)
  }, [])

  return (
    <>
      <p>{repo.name}</p>
      <p>{repo.description}</p>
      <p>{repo.html_url}</p>
      <p>{repo.language}</p>
      <p>{repo.languages_url}</p>
      <p>{repo.updated_at}</p>
    </>
  )
}

export default RepoItem
