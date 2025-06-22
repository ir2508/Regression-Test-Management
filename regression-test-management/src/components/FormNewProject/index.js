import Button from '../Button'
import Input from '../Input'
import './FormNewProject.css'

const FormNewProject = () => {
    return (
        <div className='form-project'>
            <h2>Adicionar sistema</h2>
            <form>
                <Input labelName='Sistema'/>
                <Button>Adicionar novo sistema</Button>
            </form>
        </div>
    )
}

export default FormNewProject