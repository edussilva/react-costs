import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie o seu proejto para depois adicionar os seus serviços</p>
            <ProjectForm />
        </div>
    )
}

export default NewProject
