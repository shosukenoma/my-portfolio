import { useState, useEffect } from 'react'
import fetchRepoByName from './fetchRepoByName'
import convertRepoName from './convertRepoName'
import './RepoItem.css'

function RepoItem({ repoName, customHeading, imgSrc="./assets/img/github-wallpaper.jpeg" }) { // Expanded instead of using props.repoName

  const [repo, setRepo] = useState({})

  useEffect(() => {
    fetchRepoByName(repoName)
      .then(setRepo)
  }, [])

  return (
    <div className="repo-item">
      {/* <a className="repo-link" href={repo.html_url} target='_blank'> */}
        <div className="repo-img-box">
          <img className="repo-img" src={imgSrc} alt="Background image for my repo" />
        </div>
        <div className="repo-text-box">
          <h2>{customHeading ? customHeading : convertRepoName(repoName)}</h2>
          <p>{repo.description}</p>
          {/* <p>{repo.html_url}</p> */}
          <p>{repo.language}</p>
          {/* <p>{repo.languages_url}</p>
          <p>{repo.languages}</p> */}
          <p>Last updated: {repo.updated_at?.substring(0, 10)}</p>
        </div>
      {/* </a> */}
    </div>
  )
}

export default RepoItem
