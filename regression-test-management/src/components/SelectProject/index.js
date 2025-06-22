import './SelectProject.css'

const SelectProject = ({ labelName }) => {
    return (
        <div className='select-project'>
            <label>{labelName}</label>
            <select required>
                <option disabled>Selecione um sistema...</option>
            </select>
        </div>
    )
}

export default SelectProject