import { useState, useEffect } from 'react'
import fetchRepoByName from './fetchRepoByName'
import './RepoItem.css'

function RepoItem({ repoName }) {

  const [repo, setRepo] = useState({})

  useEffect(() => {
    fetchRepoByName(repoName)
      .then(setRepo)
  }, [])

  return (
    <div className="repo-item">
      <a className="repo-link" href={repo.html_url} target='_blank'>
        <p>{repo.name}</p>
        <p>{repo.description}</p>
        {/* <p>{repo.html_url}</p> */}
        <p>{repo.language}</p>
        {/* <p>{repo.languages_url}</p>
        <p>{repo.languages}</p> */}
        <p>{repo.updated_at?.substring(0, 10)}</p>
      </a>
    </div>
  )
}

export default RepoItem
