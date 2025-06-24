import './ScenarioCard.css'
import logoCypress from '../../assets/images/cypress.png'
import Button from '../Button'

const ScenarioCard = ({ scenario, onRemoveScenario }) => {
    console.warn(scenario)
    return (
        <div className='scenario-card'>
            <div className='card-header'>
                <img src={logoCypress} alt='Logo do Cypress' />
            </div>
            <div className='card-body'>
                <div>
                    <label>Código do cenário:</label> {scenario.scenarioId}
                </div>
                <div>
                    <label>Descrição do cenário:</label> {scenario.scenarioDescription}
                </div>
                <div>
                    <label>Sistema:</label> {scenario.scenarioProject}
                </div>
                <div>
                    <label>UUID:</label> {scenario.id}
                </div>
            </div>
            <div className='card-footer'>
                <Button buttonAction="remove" onRemoveScenario={onRemoveScenario} scenarioIdToRemove={scenario.id}>Remover cenário</Button>
            </div>
        </div>
    )
}

export default ScenarioCard