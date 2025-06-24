import './SelectProject.css'

const SelectProject = ({ labelName, projects, onEdited, value }) => {
    return (
        <div className='select-project'>
            <label>{labelName}</label>
            <select onChange={event => onEdited(event.target.value)} required>
                <option selected disabled value="0">Selecione...</option>
                {projects.map(project => <option key={project} value={project}>{project}</option>)}
            </select>
        </div>
    )
}

export default SelectProject