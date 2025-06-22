import { useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import SelectProject from '../SelectProject'
import './FormNewTestCase.css'

const FormNewTestCase = ({ labelName }) => {

    const [scenarioId, setScenarioId] = useState('')
    const [scenarioDescription, setScenarioDescription] = useState('')
    const [scenarioSystem, setScenarioSystem] = useState('')

    const handleCreateTestCase = (event) => {
        event.preventDefault()
    }

    return (
        <div className='form-case-test'>
            <h2>Adicionar novo cenário</h2>
            <form onSubmit={handleCreateTestCase}>
                <Input labelName='Código do Cenário' />
                <Input labelName='Descrição do Teste' />
                <SelectProject labelName='Sistema' />
                <Button>Adicionar novo cenário</Button>
            </form>
        </div>
    )
}

export default FormNewTestCase