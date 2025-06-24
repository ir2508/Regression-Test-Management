import ScenarioCard from '../ScenarioCard'
import './Project.css'

const Project = ({ projectName, scenarios, onRemoveScenario }) => {
    {console.warn(scenarios)}
    return (
        <section className='project'>
            <h3>{projectName}</h3>
            {
                scenarios.map((scenario, index) => {
                    return <ScenarioCard key={index} scenario={scenario} onRemoveScenario={onRemoveScenario}/>
                })
            }
        </section>
    )
}

export default Project