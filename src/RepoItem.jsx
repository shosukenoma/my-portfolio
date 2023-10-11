import { useState, useEffect } from 'react'
import fetchRepoByName from './fetchRepoByName'
import convertRepoName from './convertRepoName'
import './RepoItem.css'

function RepoItem({ repoName }) { // Expanded instead of using props.repoName

  const [repo, setRepo] = useState({})

  useEffect(() => {
    fetchRepoByName(repoName)
      .then(setRepo)
  }, [])

  return (
    <div className="repo-item">
      <a className="repo-link" href={repo.html_url} target='_blank'>
        <h2>{repo.name}</h2>
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
