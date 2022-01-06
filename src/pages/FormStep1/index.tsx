import { useHistory } from 'react-router-dom'
import * as C from './styles'
import { FormActions, useForm } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';

const FormStep1 = () => {

    const history = useHistory()
    const {state, dispatch} = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    },[])

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    const handdleNextStep = () => {
        if (state.name != ''){
            history.push('/step2')
            return
        }

        alert('preencha os dados!')
    }
    

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1> Vamos começar com seu nome </h1> 
                <p>Preencha o campo abaíxo com seu nome completo.</p>
                <hr />
                <label>
                    Seu nome completo
                    <input 
                    type="text" 
                    autoFocus
                    value={state.name}
                    onChange={handleNameChange}
                    />    
                </label>

                <button onClick={handdleNextStep}> Próximo </button>
            </C.Container>
        </Theme>
    )
} 

export default FormStep1;