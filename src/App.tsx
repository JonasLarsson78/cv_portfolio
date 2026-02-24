import './App.scss'
import ProjectList from './components/ProjectList';
import projectsData from './data/data.json';

function App() {

  return (
    <>
      <h1 className="portfolio-title">Min Portfolio</h1>
      <ProjectList projects={projectsData.projects} />
    </>
  )
}

export default App
