import { useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import SelectProject from '../SelectProject'
import './FormNewTestCase.css'

const FormNewTestCase = ({ onAddScenarios, labelName, projects }) => {

    const [scenarioId, setScenarioId] = useState('')
    const [scenarioDescription, setScenarioDescription] = useState('')
    const [scenarioProject, setScenarioProject] = useState('')

    const handleCreateTestCase = (event) => {
        event.preventDefault()
        onAddScenarios({
            scenarioId: scenarioId,
            scenarioDescription: scenarioDescription,
            scenarioProject: scenarioProject
        })
        setScenarioId('')
        setScenarioDescription('')
        setScenarioProject(0)
        // handleProjectAdded({scenarioId, scenarioDescription, scenarioProject})
    }

    return (
        <div className='form-case-test'>
            <h2>Adicionar novo cenário</h2>
            <form onSubmit={handleCreateTestCase}>
                <Input labelName='Código do Cenário' value={scenarioId} onEdited={(value => setScenarioId(value))}/>
                <Input labelName='Descrição do Teste' value={scenarioDescription} onEdited={(value => setScenarioDescription(value))}/>
                <SelectProject labelName='Sistema' value={scenarioProject} projects={projects} onEdited={value => setScenarioProject(value)}/>
                <Button>Adicionar novo cenário</Button>
            </form>
        </div>
    )
}

export default FormNewTestCase