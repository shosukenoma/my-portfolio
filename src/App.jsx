import './App.css'
import RepoItem from './RepoItem'

function App() {
  return (
    <>
      <div className="repo-list-container">
        <RepoItem repoName="stock-price-scraper" />
        <RepoItem repoName="slack-note-v2" customHeading="Slack Note" />
        <RepoItem repoName="my-portfolio" />
      </div>
    </>
  )
}

export default App
