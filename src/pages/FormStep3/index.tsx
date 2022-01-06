import { useHistory, Link } from 'react-router-dom'
import * as C from './styles'
import { FormActions, useForm } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';

const FormStep3 = () => {

    const history = useHistory()
    const {state, dispatch} = useForm()

    useEffect(() => {
        if (state.name === ''){
            history.push('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
    },[])

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    

    const handdleNextStep = () => {

        if (state.email != '' && state.github != ''){
            console.log(state)
            return
        }
        alert('Por favor preencha o campo vázio do formulário!')

    }
    

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1> Legal {state.name}, onde ti achamos? </h1> 
                <p>Preencha com os campos do formulário para conseguirmos entarar em contacto.</p>
                <hr />

                <label>
                    Qual é o seu e-mail?
                    <input 
                    type="email" 
                    value={state.email}
                    onChange={handleEmailChange}
                    />    
                </label>

                <label>
                    Qual é o seu GitHub?
                    <input 
                    type="url" 
                    value={state.github}
                    onChange={handleGitHubChange}
                    />    
                </label>

                <Link to='/step2' className='backButton'>Voltar</Link>
                <button onClick={handdleNextStep}> Finalizar Cadastro </button>
            </C.Container>
        </Theme>
    )
} 

export default FormStep3;