import './App.css'
import RepoItem from './RepoItem'

function App() {
  return (
    <>
    <div className="repos-container">
      <RepoItem repoName="stock-price-scraper" />
      <RepoItem repoName="slack-note-v2" />
      <RepoItem repoName="my-portfolio" />
    </div>
    </>
  )
}

export default App
