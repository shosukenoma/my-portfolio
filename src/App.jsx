import './App.css'
import RepoCard from './RepoCard'
import Header from './Header'

function App() {
  return (
    <div className="main-container">
      <div className="inner-container debug-border">
        <Header />
        <main className="main-projects debug-border">
          <div className="projects-display debug-border">
            <h2>Hi there! Welcome to my portfolio.</h2>
            <span>
              <p>I'm Sho Noma, a software developer.
                <br/>My past projects revolve around Python, Go and React.</p>
              <p>I'm passionate about solving complex problems, and building user-friendly web services.</p>
            </span>
          </div>
          <div className="projects-sidebar debug-border">
            <h2>Projects</h2>
            {/* <select name="" id="" className="filter-bar">
              <option value="all">All Projects</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="database">Database</option>
              <option value="llm">Large Language Models</option>
            </select> */}
            <div className="project-list">
              <ul>
                <li>
                  <RepoCard repoName="stock-price-scraper" displayColor="orange" />
                </li>
                <li>
                  <RepoCard repoName="slack-note-v2" customHeading="Slack Note" displayColor="pink" />
                </li>
                <li>
                  <RepoCard repoName="my-portfolio" displayColor="light-green" />
                </li>
                <li>
                  <RepoCard repoName="chore-roulette" displayColor="dark-blue" />
                </li>
              </ul>
            </div>
          </div>
        </main>
        <footer className="debug-border">
          <p>Copyright © 2023 Sho Noma</p>
        </footer>
      </div>
    </div>
  )
}

export default App
