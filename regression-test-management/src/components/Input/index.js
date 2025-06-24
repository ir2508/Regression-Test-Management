import './Input.css'

const Input = ({ labelName, value, onEdited }) => {
    return (
        <div className='input-text'>
            <label>{labelName}</label>
            <input type='text' onChange={event => onEdited(event.target.value)} value={value} placeholder={labelName} required/>
        </div>
    )
}

export default Input