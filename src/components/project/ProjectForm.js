import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({ btnText }) {
    return (
        <form className={styles.form}>
            <Input 
                type="text" 
                text="Nome do projeto" 
                placeholder="Insira o nome do projeto" 
                name="name"
            />
            <Input 
                type="number" 
                text="Orçamento do projeto" 
                placeholder="Insira o orçamento total" 
                name="budget"
            />
            <Select
                text="Selecione a categoria"
                name="category_id"
            />
            <SubmitButton 
                text={btnText}
            />
        </form>   
    )
}

export default ProjectForm