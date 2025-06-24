import { useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import './FormNewProject.css'

const FormNewProject = ({ onAddProject, message, isAnError }) => {

    const [projectName, setProjectName] = useState('')

    const handleAddNewProject = (event) => {
        event.preventDefault()
        onAddProject(projectName)
        setProjectName('')
    }

    return (
        <div className='form-project'>
            <h2>Adicionar sistema</h2>

            <form onSubmit={handleAddNewProject}>
                <Input
                    labelName='Sistema'
                    value={projectName}
                    onEdited={value => setProjectName(value)}
                />
                {(message !== '') ? <p className={isAnError ? 'msg-error' : 'msg-success'}>{message}</p> : <p></p>}
                <Button>Adicionar novo sistema</Button>
            </form>
        </div>
    )
}

export default FormNewProject