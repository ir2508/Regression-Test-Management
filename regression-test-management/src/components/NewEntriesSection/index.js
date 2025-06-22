import FormNewTestCase from '../FormNewTestCase'
import FormNewProject from '../FormNewProject'
import './NewEntriesSection.css'

const NewEntriesSection = () => {
    return (
        <section className='new-entries'>
            <FormNewTestCase />
            <FormNewProject />
        </section>
    )
}

export default NewEntriesSection