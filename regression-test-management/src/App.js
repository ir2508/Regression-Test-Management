import { useState } from "react";
import Banner from "./components/Banner";
import FormNewTestCase from "./components/FormNewTestCase";
import FormNewProject from "./components/FormNewProject";
import Project from "./components/Project";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [scenarios, setScenarios] = useState([])
  const [allProjects, setAllProjects] = useState([])
  const [message, setMessage] = useState('')
  const [messageError, setMessageError] = useState('')

  const handleProjectAdded = (project) => {
    setAllProjects([...allProjects, project])
  }

  const handleScenarioRemoved = (scenarioToRemove) => {
    setScenarios(scenarios.filter((scenario) => scenario.id !== scenarioToRemove))
  }

  return (
    <div className="App">
      <Banner />
      <section className='new-entries'>
        <FormNewTestCase projects={allProjects}
          onAddScenarios={(scenario) => {
            setScenarios([...scenarios, { ...scenario, id: uuidv4() }])
          }}
        />

        <FormNewProject onAddProject={(project) => {
          const duplicateProjects = allProjects.filter((p) => {
            return p.toLowerCase() === project.toLowerCase()
          })

          if (duplicateProjects.length === 0) {
            handleProjectAdded(project)
            setMessage("Sistema adicionado!")
            setMessageError(false)
          } else {
            setMessage("Sistema já cadastrado!")
            setMessageError(true)
          }

          setTimeout(() => {
            setMessage('')
            setMessageError('')
          }, 5000);
        }}
          message={message}
          isAnError={messageError}
        />
      </section>


      {allProjects.map((project, index) => {
        const scenariosFiltered = scenarios.filter(scenario => scenario.scenarioProject === project)

        return (
          <Project
            key={index}
            projectName={project}
            scenarios={scenariosFiltered}
            onRemoveScenario={handleScenarioRemoved}
          />
        )
      })}

    </div>
  );
}

export default App;
