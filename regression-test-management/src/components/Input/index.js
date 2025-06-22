import './Input.css'

const Input = ({ labelName }) => {
    return (
        <div className='input-text'>
            <label>{labelName}</label>
            <input type='text' placeholder={labelName} required/>
        </div>
    )
}

export default Input